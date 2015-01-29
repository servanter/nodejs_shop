var async = require('async');
var shopService = require('./shopservice');
var itemService = require('./itemservice');
var webService = require('./webservice');
var itemSubFactory = require('./itemsubfactory');

exports.findAllShopsByUserIdAndGetItems = function(userId, shopId, param, searchValue, page, callback) {
    if (shopId) {
        async.waterfall([
            function(cb) {
                // select shop items
                webService.itemList(shopId, param, searchValue, page, function(result) {
                    cb(null, {
                        data: result
                    }); // return shop:shop, items:items
                })
            },
            function(data, cb) {

                // get userid can manage shops
                shopService.findAllShopsByUserId(userId, function(result) {
                    data.data.shops = result;
                    data.data.searchValue = searchValue;
                    cb(null, data);
                });
            }
        ], function(err, result) {
            callback(result);
        })

    } else {
        // get userid can manage shops
        shopService.findAllShopsByUserId(userId, function(result) {
            callback({
                data: {
                    shops: result
                }
            });
        });
    }
}

exports.findItemClassesAndGetUserAllShops = function(userId, shopId, callback) {
    async.waterfall([
        function(cb) {
            itemService.findClasses(function(result) {
                cb(null, result);
            })
        },
        function(data, cb) {
            shopService.findAllShopsByUserId(userId, function(result) {
                cb(null, {
                    shop: {
                        id: shopId
                    },
                    classes: data,
                    shops: result
                });
            })
        }
    ], function(err, result) {
        callback(result);
    })
}

exports.getItemDetail = function(digest, callback) {
    var message = Crypto.decryptAes(digest);
    var arr = message.split(Constants.cryptoSplit);
    async.waterfall([
        function(cb) {
            var subFactory = itemSubFactory.getService(parseInt(arr[1]));
            if(subFactory) {
                subFactory.findDetail(arr[0], function(result) {
                    cb(null, {detail:result});
                });
            }
        }, function(data, cb) {
            if(data && data.detail) {
                shopService.findShopFullInfoById(data.detail.shop_id, function(result) {
                    cb(null, {shop:result, detail:data.detail});
                });
            }
        }], function(err, data) {
            callback(data);
        }
    )
}