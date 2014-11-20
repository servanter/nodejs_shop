var Area = require('../../lib/area');
var areaService = require('../../service/areaservice');
var async = require('async');

module.exports = function(req, res) {
    areaService.findProvinces(function(result) {
        res.render('admin/add_shop', {data:{id:req.params.shopId, provinces:result}});
    })
    // async.series([1],areaService.findProvinces,function(err,result){
    //     console.log(result);
    //     res.render('admin/add_shop', {data:{id:req.params.shopId, provinces:result[0]}});
    // })
}   

