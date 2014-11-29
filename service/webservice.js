var async = require('async');
var Paging = require('../util/paging');
var relationModel = require('../model/modelrelation');
var itemService = require('./itemservice');
var shopService = require('./shopservice');
var itemSubFactory = require('./itemsubfactory');

exports.getItemDetail = function(id, callback) {
    async.waterfall([
        function(cb) {
            itemService.findById(id, function(result) {
                cb(null, result);
            });
        }, function(data, cb) {
            if(data) {
                shopService.findShopFullInfoById(data.item.shop_id, function(result) {
                    cb(null, {shop:result, item:data.item, detail:data.detail});
                });
            }
        }], function(err, data) {
            callback(data);
        }
    )
}

exports.itemList = function(shopId, param, page, callback) {
    async.waterfall([
        function(cb) {
            itemService.findItemsByShopId(shopId, page, function(result) {
                cb(null, result);
            });
        }, function(data, cb) {
            shopService.findById(shopId, function(result) {
                cb(null, {shop:result, items:data});
            });
        }, function(data, cb) {
            if(param) {
                var category = param.category;
                if(category) {
                    var subFactory = new itemSubFactory(category);
                    subFactory.findSearchConditions(shopId, param, function(result) {
                        cb(null, {shop:data.shop, items:data.items, searchConditions:result});
                    })
                }
            } else {
                cb(null, data);
            }
        }], function(err, result) {
            callback(result);
        })
}