var async = require('async');
var Paging = require('../util/paging');
var relationModel = require('../model/modelrelation');
var itemService = require('./itemservice');
var shopService = require('./shopservice');

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

exports.itemList = function(shopId, page, callback) {
    async.waterfall([
        function(cb) {
            itemService.findItemsByShopId(shopId, page, function(result) {
                cb(null, result);
            });
        }, function(data, cb) {
            shopService.findById(shopId, function(result) {
                cb(null, {shop:result, items:data});
            });
        }], function(err, result) {
            callback(result);
        })
}