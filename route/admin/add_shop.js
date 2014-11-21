var Area = require('../../lib/area');
var areaService = require('../../service/areaservice');
var async = require('async');
var Shop = require('../../lib/shop');
var UserShop = require('../../lib/usershop');

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
        var shop = Shop.build({
            short_name:shortName,
            description:description,
            province:province,
            city:city
        });
        shop.save().success(function(result) {
            var shopId = result.null;
            UserShop.create({user_id : req.session.userId, shop_id : shopId}).complete(function(err, result){
                var sign = '操作成功';
                if(err) {
                    sign = '操作失败';
                }
                req.flash('sign', sign);
                return res.redirect('/admin/home/');
            })
        });

    }
}
