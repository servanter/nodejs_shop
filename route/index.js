var Shop = require('../lib/shop');

function index(req, res) {
    var shopId = req.query.shop_id;
    if(shopId) {
        Shop.find({where: {
            id:shopId
        }}).complete(function(err, result) {
            if(err) {
                throw err;
            } else {
                 console.log(result.dataValues);                 
                 res.render('index', {data:{'shop':result.dataValues}});
            }
        });

    }
}

module.exports = index;

