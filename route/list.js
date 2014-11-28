var webService = require('../service/webservice');
var Paging = require('../util/paging');

exports.list = function (req, res) {
    var shopId = req.params.id;
    var page = req.params.page;
    if(shopId && page) {
        var p = new Paging(page, 9);
        webService.itemList(shopId, {category:req.params.a, b:req.params.b}, p, function(result) {
            res.render('list', {data:result});
        });
    }
}