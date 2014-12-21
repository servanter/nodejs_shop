var async = require('async');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var Shop = require('../../model/shop');
var Area = require('../../model/area');
var areaService = require('../../service/areaservice');
var shopservice = require('../../service/shopservice');
var shopAdService = require('../../service/shopadservice');
var Paging = require('../../util/paging');
var RandomUtil = require('../../util/random_util');
var Path = require('path');
var fs = require('fs');

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
    shopservice.findShopInfoAndAreasName(req.params.id, function(result) {
        if(result) {
            res.render('admin/shop_detail', {data:result});
        } else {
            req.flash('sign', '没有查询到该店铺信息，请您稍后重试'); 
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

    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/';
    form.parse(req, function(err, fields, files) {
        var logoPostName = files.logo.name.substring(files.logo.name.indexOf('.'));
        var photoPostName = files.publicity_photo.name.substring(files.publicity_photo.name.indexOf('.'));

        var logoFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + logoPostName;
        var photoFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + photoPostName;

        fs.renameSync(files.logo.path, 'public/images/shop/shop_logo/' + logoFullName);
        fs.renameSync(files.publicity_photo.path, 'public/images/shop/shop_publicity/' + photoFullName);
        
        var shop = {
            logo : 'shop/shop_logo/' + logoFullName,
            publicity_photo : 'shop/shop_publicity/' + photoFullName,
            user_id : req.session.userId,
            short_name : fields.short_name,
            description : fields.description,
            tips : fields.tips,
            province : fields.province,
            city : fields.city,
            address : fields.address,
            taobao_link : fields.taobao_link
        }
        shopservice.update(req.params.id, shop, function(result) {
            var sign = '更新失败';
            if(result) {
                sign = '更新成功';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/shop/');
        })
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
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/';
    form.parse(req, function(err, fields, files) {
        var logoPostName = files.logo.name.substring(files.logo.name.indexOf('.'));
        var photoPostName = files.publicity_photo.name.substring(files.publicity_photo.name.indexOf('.'));

        var logoFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + logoPostName;
        var photoFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + photoPostName;

        fs.renameSync(files.logo.path, 'public/images/shop/shop_logo/' + logoFullName);
        fs.renameSync(files.publicity_photo.path, 'public/images/shop/shop_publicity/' + photoFullName);
        
        var shop = {
            logo : 'shop/shop_logo/' + logoFullName,
            publicity_photo : 'shop/shop_publicity/' + photoFullName,
            user_id : req.session.userId,
            short_name : fields.short_name,
            description : fields.description,
            tips : fields.tips,
            province : fields.province,
            city : fields.city,
            address : fields.address,
            taobao_link : fields.taobao_link
        }
        shopservice.add(shop, function(result) {
            var sign = '操作失败';
            if(result) {
                sign = '操作成功';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/shop/');
        })


    })

}

exports.enterEditBanner = function(req, res) {
    shopservice.findShopAndAds(req.params.id, function(data) {
        res.render('admin/edit_banner', {data:{shop:data}});
    })
}

exports.editBanner = function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/';
    var shopId = req.params.id;
    form.parse(req, function(err, fields, files) {
        var index = 1;
        var data = new Array();
        for(var index = 1; files.hasOwnProperty('banner_' + index); index++) {
            var banner = eval('files.' + ('banner_' + index));
            var bannerName = banner.name.substring(banner.name.indexOf('.'));
            var bannerFullName = new Date().getTime() + '' + RandomUtil.getRandom(10000) + bannerName;
            fs.renameSync(banner.path, 'public/images/shop/ads/' + bannerFullName);
            var picUrl = 'shop/ads/' + bannerFullName;
            var desc = eval('fields.' + ('description_' + index));
            var link = eval('fields.' + ('link_' + index));
            var shopAd = {
                shop_id : shopId, 
                pic_url : picUrl,
                description : desc,
                link : link
            }
            data.push(shopAd);
        }

        shopAdService.batchSave(data, function(result) {
            var sign = '操作失败';
            if(result && result.length > 0) {
                sign = '操作成功';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/shop/');
        });

    })
}