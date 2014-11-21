var itemService = require('../../service/itemservice');

exports.addItem = function(req, res) {
    itemService.findClasses(function(result) {
        res.render('admin/add_item', {data:{classes:result, shop_id:req.params.id}});
    })
}

exports.addItemComplete = function(req, res) {
    if(req.body.shop_id && req.session.userId && req.body.short_name && req.body.description && req.body.pic_url && req.body.price) {
        var item = {
            shop_id:req.body.shop_id, 
            create_user_id:req.session.userId, 
            class_id:req.body.class_id,
            short_name:req.body.short_name, 
            description:req.body.description, 
            pic_url:req.body.pic_url, 
            price:req.body.price
        }
        itemService.addItemComplete(item, function(result) {
            console.log('------------' + result);
            var sign = '操作成功';
            if(!result) {
                sign = '操作失败';
            }
            req.flash('sign', sign);
            return res.redirect('/admin/shop/'+req.body.shop_id+'/');
        });
        
    }
}