var User = require('../model/user');
var async = require('async');
var shopService = require('./shopservice');
var Paging = require('../util/paging');

exports.login = function(user, callback) {
    if(user.userName && user.userPass) {
        findByNameAndPass(user.userName, user.userPass, function(result) {
            callback(result);
        });
    }
}

exports.findByUserName = function(userName, callback) {
    User.findOne({where:{user_name:userName}}).success(function(result) {
        callback(result);
    })
}

function findByNameAndPass (userName, password, callback) {
    User.findOne({where:{user_name:userName, user_pass:password}}).success(function(result) {
        callback(result);
    })
}

exports.save = function(user, callback) {
    User.create(user, {isNewRecord:true}).complete(function(err, result) {
        if(err) {
            callback(0);
        } else {
            callback(result.id);
        }
    })
}

exports.findByNameAndPass = findByNameAndPass;