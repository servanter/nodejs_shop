var Shop = require('../../lib/shop');
var UserShop = require('../../lib/usershop');

function createshop(req, res) {
    var shortName = req.body.short_name;
    var description = req.body.description;
    if(shortName && description) {
        var shop = Shop.build({
            short_name:shortName,
            description:description
        });
        shop.save().success(function(result) {
            var shopId = result.null;
            UserShop.create({user_id : req.session.userId, shop_id : shopId}).complete(function(err, result){
                if(err) {
                    res.write('Insert fail');
                } else {
                    res.write('success');
                    res.end();
                }
            })
        });

    }
}

module.exports = createshop;