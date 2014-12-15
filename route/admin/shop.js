var async = require('async');
var Shop = require('../../model/shop');
var Area = require('../../model/area');
var areaService = require('../../service/areaservice');
var shopservice = require('../../service/shopservice');
var Paging = require('../../util/paging');

exports.list = function(req, res) {
    var page = req.params.page;
    var p;
    if(page) {
        p = new Paging(page, 10);
    } else {
        p = new Paging(1, 10);
    }
    var shortName = req.query.short_name;
    shopservice.findShopsByUserId(req.session.userId, p, shortName, function(result) {
        res.render('admin/shop', {data:{shops:result}, search_value:shortName, sign:req.flash('sign')});
    });
}

exports.detail = function(req, res) {
    shopservice.findById(req.params.id, function(result) {
        if(result) {
            res.render('admin/shop', {data:result, sign:req.flash('sign')});
        } else {
            return res.redirect('/admin/home/');
        }
    })
}

exports.addShop = function(req, res) {
    areaService.findProvinces(function(result) {
        res.render('admin/add_shop', {data:{id:req.params.shopId, provinces:result}});
    })
}

exports.enterEditShop = function(req, res) {
    var id = req.params.id;
    if(id) {
        shopservice.findShopInfoAndAreas(id, function(result) {
            res.render('admin/edit_shop', {data:result});
        });
    }
}

exports.editShop = function(req, res) {
    var params = req.body;
    shopservice.update(req.params.id, params, function(result) {
        var sign = '更新失败';
        if(result) {
            sign = '更新成功';
        }
        req.flash('sign', sign);
        return res.redirect('/admin/shop/');
    })
}


exports.getCities = function(req, res) {
    var provinceId = req.query.province_id;
    areaService.findCitiesByProvinces(provinceId, function(result) {
        res.status(200).json(result);
        res.end();
    })
}

exports.addShopComplete = function(req, res) {
    var shortName = req.body.short_name;
    var description = req.body.description;
    var province = req.body.province;
    var city = req.body.city;
    if(shortName && description && city && province) {
        var shop = req.body;
        shop.user_id = req.session.userId;
        shopservice.add(shop, function(result) {
            var sign = '操作失败';
            if(result) {
                sign = '操作成功';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/shop/');
        })

    }
}
