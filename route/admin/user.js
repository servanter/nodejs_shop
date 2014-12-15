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