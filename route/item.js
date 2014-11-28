var webService = require('../service/webservice');

exports.detail = function (req, res) {
    var itemId = req.params.id;
    if(itemId) {
        webService.getItemDetail(itemId, function(result) {
            res.render('item_detail', {data:result});
        }); 
    }
}