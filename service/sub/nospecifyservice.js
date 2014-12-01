var async = require('async');
var itemService = require('../itemservice');

exports.findDetail = function(id, callback) {
    callback(undefined);
}

exports.findSearchConditions = function(shopId, param, callback) {
	async.waterfall([
		function(cb) {
			itemService.findItemClassesByShopId(shopId, function(result) {
				cb(null, result);
			})
		}], function(err, result) {
			callback([result]);
		});
}