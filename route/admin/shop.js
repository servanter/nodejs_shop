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
    shopservice.findShopsByUserId(req.session.userId, p, function(result) {
        res.render('admin/shop', {data:{shops:result}});
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
        var shop = {
            user_id:req.session.userId,
            short_name:shortName,
            description:description,
            province:province,
            city:city
        };
        shopservice.add(shop, function(result) {
            var sign = '操作失败';
            if(result) {
                sign = '操作成功';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/home/');
        })

    }
}
