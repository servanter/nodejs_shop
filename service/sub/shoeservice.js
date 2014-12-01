var Sequelize = require('sequelize');
var async = require('async');
var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/dictshoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');
var Pic = require('../../model/itempic');
var Color = require('../../model/dictcolor');
var Convert = require('../../util/convert');
var Paging = require('../../util/paging');

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
                        arr.push({name:result[i].brand.brand_name, id:result[i].brand.id, total:result[i].dataValues.total});
                    }
                    cb(null, arr)
                 })
            }, function(data, cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'material_id'), 'total']], include:[{model:ShoeMaterial, as:'material', required:true,attributes:[['material_name', 'material_name'],['id', 'id']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['material_id'], order:[[Sequelize.fn('COUNT', 'material_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].material.material_name, id:result[i].material.id, total:result[i].dataValues.total});
                    }
                    cb(null, {brands:data, materials:arr})
                 })
            }, function(data, cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'color_id'), 'total']], include:[{model:Color, as:'color', required:true,attributes:[['color_name', 'color_name'], ['id', 'id']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['color_id'], order:[[Sequelize.fn('COUNT', 'color_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].color.color_name, id:result[i].color.id, total:result[i].dataValues.total});
                    }
                    cb(null, [data.brands, data.materials, arr]);
                })
            }], function(err, result) {
                var baseLink = 'a' + param.a;
                var curBrand = param.b;
                var curMaterial = param.c;
                var curColor = param.d;
                if(!curBrand) {
                    curBrand = '0';
                }
                if(!curMaterial) {
                    curMaterial = '0';
                }
                if(!curColor) {
                    curColor = '0';
                }
                curBrand = 'b' + curBrand;
                curMaterial = 'c' + curMaterial;
                curColor = 'd' + curColor;
                
                for (var i = 0; i < result[0].length; i++) {
                    result[0][i].link = baseLink + 'b' + result[0][i].id + curMaterial + curColor;
                }
                for (var i = 0; i < result[1].length; i++) {
                    result[1][i].link = baseLink + curBrand + 'c' + result[1][i].id + curColor;
                }
                for (var i = 0; i < result[2].length; i++) {
                    result[2][i].link = baseLink + curBrand + curMaterial + 'd' + result[2][i].id;
                }
                callback(result);
            })
     
}

exports.findList = function(shopId, params, paging, callback) {
    var brand = {model:ShoeBrand, as:'brand', required:true, attributes:[['brand_name', 'brand_name']]};
    var color = {model:Color, as:'color', required:true, attributes:[['color_name', 'color_name']]};
    var material = {model:ShoeMaterial, as:'material', required:true, attributes:[['material_name', 'material_name']]};
    var size = {model:ShoeSize, as:'sizes', required:true, attributes:[], order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}, attributes:[]}]};
    var pic = {model:Pic, as:'pics', required:true, attributes:[['pic_url', 'pic_url']], where:{is_major:1, is_valid:1}};

    if(params) {
        if(params.b != '0') {
            brand.where = {};
            brand.where.id = params.b;
        }
        if(params.c != '0') {
            material.where = {};
            material.where.id = params.c;
        }
        if(params.d != '0') {
            console.log('-------------------------');
            color.where = {};
            color.where.id = params.d;
        }
    }
    console.log(color);
    async.waterfall([
        function(cb) {
            Shoe.findAll({attributes:[['short_name', 'short_name']], include:[size, brand, color, material, pic],where:{shop_id:shopId}, offset:paging.getSinceCount(), limit:paging.getPageSize(), group:'id'}, {subQuery:false}).success(function(result) {
                var arr = Convert.values2Arr(result);
                cb(null, arr);
            })
        }, function(data, cb) {
            Shoe.count({include:[size, brand, color, material, pic], where:{shop_id:shopId}}).success(function(count) {
                var pag = new Paging(count, paging.getPage(), paging.getPageSize(), data);
                cb(null, pag);
            })
        }], function(err, result) {
            callback(result);
        })
    
}