var webService = require('../service/webservice');
var Paging = require('../util/paging');

exports.list = function (req, res) {
    var shopId = req.params.id;
    var page = req.params.page;
    if(shopId) {
    	var p;
    	if(page) {
        	p = new Paging(page, 9);
    	} else {
    		p = new Paging(1, 9);
    	}
        console.log('--------------', req.params);
        webService.itemList(shopId, req.params, p, function(result) {
            res.render('list', {data:result});
        });
    }
}