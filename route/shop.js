var shopService = require('../service/shopservice');
var async = require('async');
var itemService = require('../service/itemservice');
var Paging = require('../util/paging');

exports.detail = function(req, res) {
    var shopId = req.params.id;
    var p = new Paging(1, 9);
    if(shopId) {
        shopService.findShopAndIndexItems(shopId, p, function(result) {
            if(res) {
                res.render('shop_detail', {data:result});
            } else {
                res.redirect('/');
            }
        })
    }
}

exports.introduce = function(req, res) {
    var shopId = req.params.id;
    var p = new Paging(1, 9);
    if(shopId) {
        shopService.findShopAndIndexItems(shopId, p, function(result) {
            if(res) {
                res.render('shop_introduce', {data:result});
            } else {
                res.redirect('/');
            }
        })
    }
}