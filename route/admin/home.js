var Shop = require('../../lib/shop');
var User = require('../../lib/user');
var UserShop = require('../../lib/usershop');

function home(req, res) {
    var user_name = req.body.user_name;
    var user_pass = req.body.user_pass;
    User.find({where:{user_name:user_name, user_pass:user_pass}}).success(function(result) {
        if(result) {
            var u = result.dataValues;
            var userId = result.dataValues.id;
            req.session.userId = userId;
            UserShop.findAndCountAll({where:{user_id:userId}}).success(function(re) {
                if(re && re.count > 0) {
                    var shopIds = [];
                    for(var i = 0; i < re.count; i++) {
                        shopIds.push(re.rows[i].dataValues.shop_id);
                    }

                    if(shopIds.length > 0) {
                        Shop.findAll({where: {
                            id:{in : shopIds}
                        }, limit:shopIds.length}).success(function(re1) {
                            res.render('admin/home', {data:{'shops':re1}});
                        });
                    }
                }
            })

        }
    });
    
}

module.exports = home;

