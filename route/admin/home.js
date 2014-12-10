var Shop = require('../../model/shop');
var User = require('../../model/user');
var userService = require('../../service/userservice');
var shopService = require('../../service/shopservice');
var Paging = require('../../util/paging');
var Constants = require('../../util/constants');

function home(req, res) {
    if(!req.session.userId) {
        var userName = req.body.user_name;
        var userPass = req.body.user_pass;
        userService.login({userName:userName, userPass:userPass}, function(result) {
            if(result) {
                req.session.userId = result.userId;
                res.render('admin/home', {data:{'shops':result.shops, 'sign':req.flash('sign')}});
            } else {
                res.render('admin/index', {sign:Constants.ErrorCode.LOGIN_FAIL});
            }
        });
        
    } else {
        var userId = req.session.userId;
        var page = req.query.page;
        var paging = new Paging(page);
        shopService.findShopsByUserId(userId, paging, function(result) {
            res.render('admin/home', {data:{'shops':result, 'sign':req.flash('sign')}});
        })
        
    }
    
}

module.exports = home;

