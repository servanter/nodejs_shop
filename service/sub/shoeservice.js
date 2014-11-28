var Sequelize = require('sequelize');
var async = require('async');
var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/dictshoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');

exports.findDetail = function(id, callback) {
    Shoe.findAll({include:[{model:ShoeSize, as:'sizes', required:true, order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}}]}, {model:ShoeBrand, as:'brand', required:true}, {model:ShoeMaterial, as:'material', required:true}],where:{item_id:id}}, {subQuery:false}).success(function(result) {
        var attr = packageAttr(result[0].dataValues);
        result[0].dataValues.attr = attr;
        callback(result[0].dataValues);
    })
}

function packageAttr(detail) {
    return [{key:'品牌名称', value:detail.brand.brand_name}, {key:'商品名称', value:detail.short_name}, {key:'产 地', value:detail.come_from}, {key:'材 质', value:detail.material.material_name}, {key:'备 注', value:detail.note}, {key:'货品编号', value:detail.serial_number}];
}

exports.searchConditions = function(shopId, callback) {
        async.waterfall([
            function(cb) {
                Shoe.findAll({attributes:[], include:[{model:ShoeBrand, as:'brand', required:true,attributes:[['brand_name', 'brand_name']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['brand_id'], order:[[Sequelize.fn('COUNT', 'brand_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    cb(null, result)
                 })
            }, function(data, cb) {
                Shoe.findAll({attributes:[], include:[{model:ShoeMaterial, as:'material', required:true,attributes:[['material_name', 'material_name']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['material_id'], order:[[Sequelize.fn('COUNT', 'material_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    
                    
                    cb({brands:data, materials:result})
                 })
            }
            ], function(err, result) {
                callback({searchConditions:result});
            })
     
}