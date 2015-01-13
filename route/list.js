var webService = require('../service/webservice');
var Paging = require('../util/paging');

exports.list = function (req, res) {
    var shopId = req.params.id;
    var page = req.params.page;
    var searchVal = req.query.search_val;
    if(shopId) {
    	var p;
    	if(page) {
        	p = new Paging(page, 8);
    	} else {
    		p = new Paging(1, 8);
    	}
        webService.itemList(shopId, req.params, searchVal, p, function(result) {
            res.render('list', {data:result});
        });
    }
}