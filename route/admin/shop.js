var Shop = require('../../lib/shop');

function shop(req, res) {
    if(req.params.id) {
        Shop.find({where:{id:req.params.id}}).success(function(result) {
            if(result) {
                res.render('admin/shop', {data:result.dataValues, sign:req.flash('sign')});
            }
        })
    } else {
        return res.redirect('/admin/home/');
    }
}

module.exports = shop