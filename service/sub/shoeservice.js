var Sequelize = require('sequelize');
var async = require('async');
var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/dictshoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');
var Color = require('../../model/dictcolor');

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

exports.findSearchConditions = function(shopId, param, callback) {
        async.waterfall([
            function(cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'brand_id'), 'total']], include:[{model:ShoeBrand, as:'brand', required:true,attributes:[['brand_name', 'brand_name'], ['id', 'id']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['brand_id'], order:[[Sequelize.fn('COUNT', 'brand_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].brand.brand_name, href:result[i].brand.id, total:result[i].dataValues.total});
                    }
                    cb(null, arr)
                 })
            }, function(data, cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'material_id'), 'total']], include:[{model:ShoeMaterial, as:'material', required:true,attributes:[['material_name', 'material_name'],['id', 'id']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['material_id'], order:[[Sequelize.fn('COUNT', 'material_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].material.material_name, href:result[i].material.id, total:result[i].dataValues.total});
                    }
                    cb(null, {brands:data, materials:arr})
                 })
            }, function(data, cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'color_id'), 'total']], include:[{model:Color, as:'color', required:true,attributes:[['color_name', 'color_name'],['alias', 'alias']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['color_id'], order:[[Sequelize.fn('COUNT', 'color_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].color.color_name, href:result[i].color.alias, total:result[i].dataValues.total});
                    }
                    cb(null, [data.brands, data.materials, arr]);
                })
            }], function(err, result) {
                callback(result);
            })
     
}

