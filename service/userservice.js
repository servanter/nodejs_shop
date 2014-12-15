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

function findByNameAndPass (userName, password, callback) {
    User.findOne({where:{user_name:userName, user_pass:password}}).success(function(result) {
        callback(result);
    })
}

exports.findByNameAndPass = findByNameAndPass;