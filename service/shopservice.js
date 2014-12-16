var Shop = require('../model/shop');
var ShopPromise = require('../model/dictshoppromise');
var async = require('async');
var Paging = require('../util/paging');
var Convert = require('../util/convert');
var itemService = require('./itemService');
var shopAdService = require('./shopadservice');
var areaService = require('./areaservice');

function findById(shopId, callback) {
    Shop.findOne({
        where: {
            id: shopId
        }
    }).success(function(data) {
        callback(data.dataValues);
    })
}

exports.findShopsByUserId = function(userId, paging, shortName, callback) {
    var conditions = {user_id:userId};
    if(shortName) {
        conditions.short_name = {like: '%' + shortName + '%'};
    }
    async.waterfall([
        function(cb) {
            Shop.findAll({
                where: conditions,
                offset: paging.sinceCount,
                limit: paging.pageSize
            }).success(function(data) {
                cb(null, Convert.values2Arr(data));
            });
        },
        function(data, cb) {
            Shop.count({
                where: conditions
            }).success(function(count) {
                var pResult = new Paging(count, paging.page, paging.pageSize, data);
                cb(null, pResult);
            });
        }
    ], function(err, result) {
        callback(result);
    });

}

exports.add = function(shop, callback) {
    Shop.create(shop).complete(function(err, result) {
        if (err) {
            callback(false);
        } else {
            callback(true);
        }
    })
}


exports.findShopAndIndexItems = function(shopId, p, callback) {
    async.waterfall([
        function(cb) {
            findById(shopId, function(result) {
                cb(null, result);
            })
        },
        function(data, cb) {
            shopAdService.findByShopId(data.id, function(result) {
                data.ads = result;
                cb(null, data);
            })
        },
        function(data, cb) {
            itemService.findItemsByShopId(data.id, p, function(result) {
                cb(null, {
                    shop: data,
                    items: result
                });
            })
        }
    ], function(err, result) {
        callback(result);
    });
}

exports.findShopFullInfoById = function(shopId, callback) {
    Shop.findAll({
        include: [{
            model: ShopPromise,
            as: 'promises',
            required: true,
            where: {
                is_valid: 1
            }
        }],
        where: {
            id: shopId
        }
    }, {
        subQuery: false
    }).success(function(data) {
        callback(data[0].dataValues);
    })
}

exports.findShopInfoAndAreas = function(shopId, callback) {
    async.waterfall([
        function(cb) {
            findById(shopId, function(result) {
                cb(null, result);
            })
        }, function(data,cb) {
            areaService.findProvinces(function(result) {
                cb(null, {shop:data, provinces:result});
            })
        }, function(data, cb) {
            areaService.findCitiesByProvinces(data.shop.province, function(result) {
                cb(null, {shop:data.shop, provinces:data.provinces, cities:result});
            }) 
        }], function(err, result) {
            callback(result);
    })
}

exports.findShopInfoAndAreasName = function(shopId, callback) {
    async.waterfall([
        function(cb) {
            findById(shopId, function(result) {
                cb(null, result);
            })
        }, function(data,cb) {
            var provinceId = data.province;
            areaService.findById(provinceId, function(result) {
                cb(null, {shop:data, province:result});
            });
        }, function(data, cb) {
            var cityId = data.shop.city;
            areaService.findById(cityId, function(result) {
                cb(null, {shop:data.shop, province:data.province, city:result});
            });
        }], function(err, result) {
            callback(result);
    })
}

exports.update = function(id, params, callback) {
    Shop.update(params, {where:{id: id}}).complete(function(err, result) {
        console.log(result);
        if(err) {
            callback(false);
        } else {
            callback(true);
        }
    });
}
exports.findById = findById