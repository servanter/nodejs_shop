var ShopAd = require('../model/shopad');
var async = require('async');

exports.findByShopId = function(shopId, callback) {
    ShopAd.findAll({where:{shop_id:shopId}}).success(function(result) {
        callback(result);
    })
}

function save(ad, callback) {
	ShopAd.create(ad).complete(function(err, result) {
		if(err) {
			callback(0);
		} else {
			callback(result.id);
		}
	})
}

exports.save = save;
exports.batchSave = function(ads, cb) {
	if(ads && ads.length > 0) {
		var data = new Array();
		async.eachSeries(ads, function(item, callback) {
			save(item, function(result) {
				data.push(result);
				callback();
			})
		}, function(err) {
			cb(data);
		})
	} else {
		cb(0);
	}
}