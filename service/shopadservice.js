var ShopAd = require('../model/shopad');

exports.findByShopId = function(shopId, callback) {
    ShopAd.findAll({where:{shop_id:shopId}}).success(function(result) {
        callback(result[0]);
    })
}