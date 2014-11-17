var Article = require('../../lib/article');

function addArticleComplete(req, res) {
    console.log(req.body);
    res.send(req.body);
    console.log(req.body.title);
    // console.log(req.params);
    // console.log(req.query);
    // var title = req.query.title;
    // var content = req.param.c;
    // if(title && content) {
    //     Article.create({
    //         shop_id:'1'
    //     }).success(function(result) {
    //         console.log('add article success.');
    //     });
    // }
}

module.exports = addArticleComplete