var async = require('async');
var fs = require('fs');
var itemService = require('../../service/itemservice');
var formidable = require('formidable');
var itemSubFactory = require('../../service/itemsubfactory');
var RandomUtil = require('../../util/random_util');
var Crypto = require('../../util/crypto_util');
var Paging = require('../../util/paging');
var Constants = require('../../util/constants');

exports.addItem = function(req, res) {
    itemService.findClasses(function(result) {
        res.render('admin/add_item', {data:{classes:result, shop_id:req.params.id}});
    })
}

exports.enteradditem = function(req, res) {
    var shopId = req.params.id;
    itemService.findClasses(function(result) {
        res.render('admin/add_item', {data:{shop:{id:shopId}, classes:result}});
    });

}

exports.getSubAttributes = function(req, res) {
    var classId = req.query.class_id;
    itemService.findAttributesByClassId(classId, function(result) {
        res.status(200).json(result);
        res.end();
    });
}

exports.additem = function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/';
    var shopId = req.params.id;
    var obj = {};
    
    async.waterfall([
        function(cb) {
            form.on('field', function(name, value) {
                if(eval('obj.' + name)) {
                    var lastValue = eval('obj.' + name);
                    if(typeof(lastValue) == 'object' && lastValue.constructor == Array) {
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
            obj.shop_id = shopId;
            obj.user_id = req.session.userId;
            cb(null, obj);
        }], function(err, result) {
           form.parse(req, function(err, fields, files) {
            var subFactory = new itemSubFactory.getService(parseInt(obj.item_class));
            if(subFactory) {
                var index = 1;
                var data = new Array();
                for(var index = 1; files.hasOwnProperty('pic_' + index); index++) {
                    var pic = eval('files.' + ('pic_' + index));
                    var picName = pic.name.substring(pic.name.indexOf('.'));
                    var picFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + picName;
                    fs.renameSync(pic.path, 'public/images/item/' + picFullName);
                    var picUrl = 'images/item/' + picFullName;
                    data.push(picUrl);
                }
                subFactory.save(obj, data, function(result) {
                    var sign = '操作失败';
                    if(result.flag) {
                        itemService.save(result.data, function(result) {
                            if(result) {
                                sign = '添加商品成功';
                            }
                            req.flash('sign', sign);
                            return res.redirect('/admin/shop/');
                        });
                    } else {
                        req.flash('sign', sign);
                        return res.redirect('/admin/shop/');
                    }
                });
            }
        })
    })

}

exports.enterEditPosition = function(req, res) {
    var shopId = req.params.id;
    var index = 1;
    var p = new Paging(1, 6);
    itemService.findCurrentPositionsAndAvaliableItemNames(shopId, index, p, function(result) {
        res.render('admin/edit_position_index', {data:{item:result, shop:{id:shopId}}});
    });
}

exports.removePositions = function(req, res) {
    var shopId = req.query.shop_id;
    var position = req.query.position;
    var ids = req.query.items;
    if(ids) {
        itemService.removePositions(shopId, position, ids, function(data) {
            if(data) {
                res.status(200).json({result:data});
                res.end();
            } else {
                res.status(200).json({result:data, msg:'操作失败'});
                res.end();
            }
        })
    } else {
        res.status(200).json({result:false, msg:'操作失败'});
        res.end();
    }
}

exports.getById = function(req, res) {
    var message = req.params.id;
    if(message && message.length) {
        itemService.findBaseInfoById(message, function(result) {
            if(result) {
                res.status(200).json({result:true, data:result});
                res.end();
            } else {
                res.status(200).json({result:false, msg:'系统错误'});
                res.end();
            }
        })
    }
}

exports.addIndexPosition = function(req, res) {
    var message = req.params.id;
    var shopId = req.body.shop_id;
    var index = req.body.index;
    if(message && message.length && shopId && shopId.length) {
        itemService.addIndexPosition(shopId, message, index, req.session.userId, function(result) {
            if(result) {
                itemService.findBaseInfoById(message, function(current) {
                    var cur = current.toJSON();
                    cur.encrypt = Crypto.encryptAes(current.detail_id + Constants.cryptoSplit + current.class_id + Constants.cryptoSplit + current.id);
                    var re = {result:true, data:{current:cur}};
                    res.status(200).json(re);
                    res.end();
                })
            } else {
                res.status(200).json({result:false, msg:'系统错误'});
                res.end();
            }
        });
    }
}