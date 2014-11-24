var Article = require('../model/article');


exports.addArticle = function(article, callback) {
    Article.create(article).complete(function(err, results) {
        if(err) {
            callback(false);
        } else {
            callback(true);
        }
    })
}