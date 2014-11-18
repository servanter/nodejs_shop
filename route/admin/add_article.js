function addArticle(req, res) {
    res.render('admin/add_article', {data:{id:req.params.shopId}});
}   

module.exports = addArticle