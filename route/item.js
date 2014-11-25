var itemService = require('../service/itemservice');

exports.detail = function (req, res) {
    var itemId = req.params.id;
    if(itemId) {
        itemService.findById(itemId, function(result) {
            res.render('item_detail', {data:result});
        })
    }
}