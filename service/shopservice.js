var Shop = require('../model/shop');
var async = require('async');
var Paging = require('../util/paging');
var Convert = require('../util/convert');

exports.findById=function(shopId, callback) {
    Shop.find({where:{id:shopId}}).success(function(data) {
        callback(data.dataValues);
    })
}

exports.findShopsByUserId = function(userId, paging, callback) {
    async.waterfall([
        function(cb) {
            Shop.findAll({where:{user_id:userId}, offset:paging.getSinceCount(), limit:paging.getPageSize()}).success(function(data){
                cb(null, Convert.values2Arr(data));
            });
        }, function(data, cb) {
             Shop.count({where:{user_id:userId}}).success(function(count){
                var pResult = new Paging(count, paging.getPage(), paging.getPageSize(), data);
                cb(null, pResult);
            });
        }
        ], function(err, result) {
            callback(result);
        });

}

