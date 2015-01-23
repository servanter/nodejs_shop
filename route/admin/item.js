var async = require('async');
var fs = require('fs');
var iconv = require('iconv-lite');
var itemService = require('../../service/itemservice');
var shopService = require('../../service/shopservice');
var adminService = require('../../service/adminservice');
var formidable = require('formidable');
var itemSubFactory = require('../../service/itemsubfactory');
var RandomUtil = require('../../util/random_util');
var Paging = require('../../util/paging');

exports.enteradditem = function(req, res) {
    var shopId = req.params.id;
    adminService.findItemClassesAndGetUserAllShops(req.session.userId, shopId, function(result) {
        res.render('admin/add_item', {
            data: result
        });
    })

}

exports.getSubAttributes = function(req, res) {
    var classId = req.query.class_id;
    itemService.findAttributesByClassId(classId, function(result) {
        res.status(200).json(result);
        res.end();
    });
}

exports.addItem = function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/';
    var shopId = req.params.id;
    var obj = {};


    form.on('field', function(name, value) {
        if (eval('obj.' + name)) {
            var lastValue = eval('obj.' + name);
            if (typeof(lastValue) == 'object' && lastValue.constructor == Array) {
                lastValue.push(value);
                eval('obj.' + name + '=lastValue');
            } else {
                var arr = new Array(lastValue, value);
                eval('obj.' + name + '=arr');
            }
        } else {
            eval("obj." + name + "='" + value + "'");
        }

    });

    form.parse(req, function(err, fields, files) {
        obj.shop_id = shopId;
        obj.user_id = req.session.userId;
        var subFactory = new itemSubFactory.getService(parseInt(obj.item_class));
        if (subFactory) {
            var index = 1;
            var data = new Array();
            for (var index = 1; files.hasOwnProperty('pic_' + index); index++) {
                var pic = eval('files.' + ('pic_' + index));
                var picName = pic.name.substring(pic.name.indexOf('.'));
                var picFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + picName;
                fs.renameSync(pic.path, 'public/images/item/' + picFullName);
                var picUrl = 'item/' + picFullName;
                data.push(picUrl);
            }
            subFactory.save(obj, data, function(result) {
                var sign = '操作失败';
                if (result.flag) {
                    sign = '添加商品成功';
                    async.each(result.data, function(item, callback) {
                        itemService.save(item, function(result) {
                            callback();
                        });
                    }, function(err, result) {
                        req.flash('sign', sign);
                        return res.redirect('/admin/shop/');
                    })
                } else {
                    req.flash('sign', sign);
                    return res.redirect('/admin/shop/');
                }
            });
        }
    })

}

exports.enterEditPosition = function(req, res) {
    var shopId = req.params.id;
    var index = 1;
    var p = new Paging(1, 6);
    itemService.findCurrentPositionsAndAvaliableItemNames(shopId, index, p, function(result) {
        res.render('admin/edit_position_index', {
            data: {
                item: result,
                shop: {
                    id: shopId
                }
            }
        });
    });
}

exports.removePositions = function(req, res) {
    var shopId = req.query.shop_id;
    var position = req.query.position;
    var ids = req.query.items;
    if (ids) {
        itemService.removePositions(shopId, position, ids, function(data) {
            if (data) {
                res.status(200).json({
                    result: data
                });
                res.end();
            } else {
                res.status(200).json({
                    result: data,
                    msg: '操作失败'
                });
                res.end();
            }
        })
    } else {
        res.status(200).json({
            result: false,
            msg: '操作失败'
        });
        res.end();
    }
}

exports.getById = function(req, res) {
    var message = req.params.id;
    if (message && message.length) {
        itemService.findBaseInfoById(message, function(result) {
            if (result) {
                res.status(200).json({
                    result: true,
                    data: result
                });
                res.end();
            } else {
                res.status(200).json({
                    result: false,
                    msg: '系统错误'
                });
                res.end();
            }
        })
    }
}

exports.addIndexPosition = function(req, res) {
    var message = req.params.id;
    var shopId = req.body.shop_id;
    var index = req.body.index;
    if (message && message.length && shopId && shopId.length) {
        itemService.addIndexPosition(shopId, message, index, req.session.userId, function(result) {
            if (result) {
                itemService.findBaseInfoById(message, function(current) {
                    var re = {
                        result: true,
                        data: {
                            current: current
                        }
                    };
                    res.status(200).json(re);
                    res.end();
                })
            } else {
                res.status(200).json({
                    result: false,
                    msg: '系统错误'
                });
                res.end();
            }
        });
    }
}

exports.list = function(req, res) {
    var shopId = req.query.shop_id;
    var page = req.params.page;
    var itemName = req.query.short_name;
    var p;
    if (page) {
        p = new Paging(page, 10);
    } else {
        p = new Paging(1, 10);
    }
    if (shopId) {
        res.redirect('/admin/shop/' + shopId + '/item/?short_name=' + encodeURIComponent(itemName));
    } else {
        adminService.findAllShopsByUserIdAndGetItems(req.session.userId, shopId, req.params, itemName, page, function(result) {
            res.render("admin/item", result);
        })

    }
}


exports.shopItems = function(req, res) {
    var shopId = req.params.id;
    var page = req.params.page;
    var itemName = req.query.short_name;
    var p;
    if (page) {
        p = new Paging(page, 10);
    } else {
        p = new Paging(1, 10);
    }
    adminService.findAllShopsByUserIdAndGetItems(req.session.userId, shopId, req.params, itemName, p, function(result) {
        res.render("admin/shop_item", result);
    })
}