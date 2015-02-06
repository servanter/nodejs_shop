var async = require('async');
var Paging = require('../util/paging');
var Crypto = require('../util/crypto_util');
var Constants = require('../util/constants');
var relationModel = require('../model/modelrelation');
var itemService = require('./itemservice');
var shopService = require('./shopservice');
var itemSubFactory = require('./itemsubfactory');

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

exports.itemList = function(shopId, param, searchValue, page, callback) {
    async.waterfall([
        function(cb) {

            // list data
            itemService.search(shopId, param, searchValue, page, function(result) {
                cb(null, result);
            });
        }, function(data, cb) {
            shopService.findById(shopId, function(result) {
                cb(null, {shop:result, items:data});
            });
        }, function(data, cb) {

            // can selected conditions
            var category = parseInt(param.a);
            var subFactory = new itemSubFactory.getService(category);
            subFactory.findSearchConditions(shopId, param, searchValue, function(result) {
                cb(null, {shop:data.shop, items:data.items, searchConditions:result.searchConditions, currentSelected:result.currentSelected});
            })
        }], function(err, result) {
            var category = param.a;
            if(!category) {
                category = '0';
            }
            result.category = category;
            callback(result);
        })
}