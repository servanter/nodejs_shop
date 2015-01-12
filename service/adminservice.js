var async = require('async');
var shopService = require('./shopservice');
var itemService = require('./itemservice');
var webService = require('./webservice');

exports.findAllShopsByUserIdAndGetItems = function(userId, shopId, param, page, callback) {
    if(shopId) {

        // select shop items
        webService.itemList(shopId, param, page, function(result) {
            callback({data:result});    // return shop:shop, items:items
        })
    } else {
        // get userid can manage shops
        shopService.findAllShopsByUserId(userId, function(result) {
            callback({data:{shops:result}});
        });
    }
}