var userService = require('../../service/userservice');
var Constants = require('../../util/constants');

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

exports.addUser = function(req, res) {
    var user = {
        user_name : req.body.user_name,
        user_pass : req.body.user_pass
    }
    userService.save(user, function(result) {
        if(result > 0) {
            req.session.userId = result;
            console.log(req.session.userId);
            res.redirect('/admin/home');
        } else {
            res.render('admin/register', {sign:false});
        }
    });
}