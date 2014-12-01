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
            itemService.search(shopId, param, page, function(result) {
                cb(null, result);
            });
        }, function(data, cb) {
            shopService.findById(shopId, function(result) {
                cb(null, {shop:result, items:data});
            });
        }, function(data, cb) {
            var category = param.a;
            var subFactory = new itemSubFactory.getService(parseInt(category));
            subFactory.findSearchConditions(shopId, param, function(result) {
                cb(null, {shop:data.shop, items:data.items, searchConditions:result});
            })
        }], function(err, result) {
            result.category = param.a;
            callback(result);
        })
}