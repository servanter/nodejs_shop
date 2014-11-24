var User = require('../model/user');
var async = require('async');
var shopService = require('./shopservice');
var Paging = require('../util/paging');

exports.login = function(user, callback) {
    if(user.userName && user.userPass) {
        async.waterfall([
            function(cb) {
                findByNameAndPass(user.userName, user.userPass, function(result) {
                    cb(null, result);
                })
            }, function(data, cb) {
                shopService.findShopsByUserId(data.id, new Paging(1, 6), function(result) {
                    cb(null, {userId:data.id, shops:result});
                });
            }],
            function(err, result) {
                if(err, result) {
                    callback(result);
                }
            }
        )
    }
}

function findByNameAndPass (userName, password, callback) {
    User.findOne({where:{user_name:userName, user_pass:password}}).success(function(result) {
        callback(result.dataValues);
    })
}

exports.findByNameAndPass = findByNameAndPass;