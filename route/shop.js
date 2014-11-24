var shopService = require('../service/shopservice');
var async = require('async');
var itemService = require('../service/itemservice');
var Paging = require('../util/paging');

exports.detail = function(req, res) {
    var shopId = req.params.id;
    var p = new Paging(1, 6);
    console.log(p);
    if(shopId) {
        async.waterfall([
            function(cb) {
                shopService.findById(shopId, function(result) {
                    cb(null, result);
                })
            }, function(data, cb) {
                itemService.findItemsByShopId(data.id, p, function(result) {
                    cb(null, {shop:data, items:result});
                })
            }
        ], function(err, result) {
            if(err) {
                throw err;
            } else {
                res.render('shop_detail', {data:result});
            }
        });
    }
}