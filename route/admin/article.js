var Article = require('../../model/article');
var articleService = require('../../service/articleservice');

exports.addArticle = function(req, res) {
    res.render('admin/add_article', {data:{id:req.params.shopId}});
}

exports.addArticleComplete = function(req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var shopId = req.params.shopId;

    if(title && content) {
        var article = {
            shop_id:shopId,
            user_id:req.session.userId,
            title:title,
            content:content
        };
        articleService.addArticle(article, function(flag) {
            var sign = '添加失败';
            if(flag) {
                sign = '操作成功';
            }
            req.flash('sign', sign);
            var url = '/admin/shop/'+ shopId +'/';
            return res.redirect(url);
        });
    }
}
