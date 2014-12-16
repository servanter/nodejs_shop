var userService = require('../../service/userservice');
var Constants = require('../../util/constants');
var CryptoUtil = require('../../util/crypto_util');

exports.checkUserName = function(req, res) {
    var userName = req.query.user_name;
    var result = Constants.ErrorCode.REGISTER_DUPLICATE_USERNAME;
    if(userName) {
        userService.findByUserName(userName, function(result) {
            if(result == null) {
                result = Constants.ErrorCode.SUCCESS;
                res.status(200).json({errorCode:result});
                res.end();
            } else {
                res.status(200).json({errorCode:result});
                res.end();
            }
        })
    }
}

exports.logout = function(req, res) {
    req.session.userId = undefined;
    res.redirect('/admin/');
}

exports.addUser = function(req, res) {
    var user = {
        user_name : req.body.user_name,
        user_pass : CryptoUtil.md5(req.body.user_pass)
    }
    userService.save(user, function(result) {
        if(result > 0) {
            req.session.userId = result;
            res.redirect('/admin/home');
        } else {
            res.render('admin/register', {sign:false});
        }
    });
}