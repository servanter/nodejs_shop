var Shop = require('../model/shop');

exports.findById=function(shopId, callback) {
    Shop.find({where:{id:shopId}}).success(function(data) {
        callback(data.dataValues);
    })
}