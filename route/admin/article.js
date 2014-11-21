var Article = require('../../model/article');

exports.addArticle = function(req, res) {
    res.render('admin/add_article', {data:{id:req.params.shopId}});
}

exports.addArticleComplete = function(req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var shopId = req.params.shopId;
    if(title && content) {
        Article.create({
            shop_id:shopId,
            user_id:req.session.userId,
            title:title,
            content:content
        }).complete(function(err, result) {
            var sign = '添加成功';
            if(err) {
                sign = '操作失败';
            }
            req.flash('sign', sign);
            var url = '/admin/shop/'+ shopId +'/';
            return res.redirect(url);
        });
    }
}
