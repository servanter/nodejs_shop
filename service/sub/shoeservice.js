var Sequelize = require('sequelize');
var async = require('async');
var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/dictshoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');
var Pic = require('../../model/detailpic');
var Color = require('../../model/dictcolor');
var Convert = require('../../util/convert');
var Constants = require('../../util/constants');
var Paging = require('../../util/paging');

exports.findDetail = function(id, callback) {
    Shoe.find({include:[{model:ShoeSize, as:'sizes', required:true, attributes:[['description', 'description']], order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}, attributes:[['shoe_id', 'shoe_id'],['size_id', 'size_id']]}]}, {model:ShoeBrand, as:'brand', required:true, attributes:[['brand_name', 'brand_name']]}, {model:ShoeMaterial, as:'material', required:true, attributes:[['material_name', 'material_name']]}, {model:Pic, as : 'pics', required:false, attributes:[['pic_url', 'pic_url']], where:{class_id:Constants.SubClasses.SHOE}}],where:{id:id, is_vertify:1, on_sell:1}}, {subQuery:false}).success(function(result) {
        var attr = packageAttr(result);
        result.attr = attr;
        callback(result);
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

                // generate the conditions links
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
                
                // user select the situations
                var currentSelected = [];
                for (var i = 0; i < result[0].length; i++) {
                    result[0][i].link = baseLink + 'b' + result[0][i].id + 'c' + curMaterial + 'd' + curColor;
                    // add high light
                    if(result[0][i].id == parseInt(curBrand)) {
                        result[0][i].highlight = true;
                        currentSelected.push({name:result[0][i].name, link:'a' + param.a + 'b0' + 'c' + curMaterial + 'd' + curColor});
                    }
                }

                for (var i = 0; i < result[1].length; i++) {
                    result[1][i].link = baseLink + 'b' + curBrand + 'c' + result[1][i].id + 'd' + curColor;
                    if(result[1][i].id == parseInt(curMaterial)) {
                        result[1][i].highlight = true;
                        currentSelected.push({name:result[1][i].name, link:'a' + param.a + 'b' + curBrand + 'c0' + 'd' + curColor});
                    }
                }
                for (var i = 0; i < result[2].length; i++) {
                    result[2][i].link = baseLink + 'b' + curBrand + 'c' + curMaterial + 'd' + result[2][i].id;
                    if(result[2][i].id == parseInt(curColor)) {
                        result[2][i].highlight = true;
                        currentSelected.push({name:result[2][i].name, link:'a' + param.a + 'b' + curBrand + 'c' + curMaterial + 'd0'});
                    }
                }
                callback({searchConditions:result, currentSelected:currentSelected});
            })
     
}

exports.findList = function(shopId, params, paging, callback) {
    var brand = {model:ShoeBrand, as:'brand', required:true, attributes:[['brand_name', 'brand_name']]};
    var color = {model:Color, as:'color', required:true, attributes:[['color_name', 'color_name']]};
    var material = {model:ShoeMaterial, as:'material', required:true, attributes:[['material_name', 'material_name']]};
    var size = {model:RelShoeSize, as:'relShoeSizes', required:true, attributes:[]};
    var pic = {model:Pic, as:'pics', required:true, attributes:[['pic_url', 'pic_url']]}

    var queryArr = [];
    if(params) {
        if(params.b && params.b != '0') {
            brand.where = {};
            brand.where.id = params.b;
        }
        if(params.c && params.c != '0') {
            material.where = {};
            material.where.id = params.c;
        }
        if(params.d && params.d != '0') {
            color.where = {};
            color.where.id = params.d;
        }
        queryArr.push(brand);
        queryArr.push(material);
        queryArr.push(color);
        queryArr.push(pic);
        if(params.e && params.e != '0') {

            // query shoe size rel s
            size.where = {};
            size.where.size_id = params.e;
            queryArr.push(size);
        }
    }
    async.waterfall([
        function(cb) {
            Shoe.findAll({attributes:[['short_name', 'short_name'], ['id', 'id'], ['update_time', 'opt_time'], ['price', 'price']], include:queryArr, where:{shop_id:shopId, is_vertify:1, on_sell:1}, offset:paging.sinceCount, limit:paging.pageSize, group:'id', order:[['opt_time']]}, {subQuery:false}).success(function(result) {
                var arr = Convert.values2Arr(result);
                cb(null, arr);
            })
        }, function(data, cb) {
            Shoe.count({distinct:true, include:queryArr, where:{shop_id:shopId, is_vertify:1, on_sell:1}}).success(function(count) {
                var pag = new Paging(count, paging.page, paging.pageSize, data);
                cb(null, pag);
            })
        }], function(err, result) {
            callback(result);
        })
    
}

exports.findFullConditions = function(callback) {
    async.waterfall([
        function(cb) {
            ShoeBrand.findAll({attributes:[['id', 'val'], ['brand_name', 'name']], where:{is_valid:1}}).success(function(result) {
                cb(null, {brands:result});
            })        
        }, function(data, cb) {
            ShoeMaterial.findAll({attributes:[['id', 'val'], ['material_name', 'name']], where:{is_valid:1}}).success(function(result) {
                cb(null, {brands:data.brands, materials:result});
            })
        }, function(data, cb) {
            ShoeSize.findAll({attributes:[['id', 'val'], ['description', 'name']]}).success(function(result) {
                cb(null, {brands:data.brands, materials:data.materials, sizes:result});
            })
        }, function(data, cb) {
            Color.findAll({attributes:[['id', 'val'], ['color_name', 'name']], where:{is_valid:1}}).success(function(result) {
                cb(null, {brands:data.brands, materials:data.materials, sizes:data.sizes, colors:result});
            })
        }], function(err, result) {
            var arr = new Array();
            arr.push({name:'品牌', alias:'brand_id', desc:'所选品牌', data:result.brands, type:'select'});
            arr.push({name:'材料', alias:'material_id', desc:'所用材料' ,data:result.materials, type:'multiSelect'});
            arr.push({name:'尺码', alias:'size_id', desc:'适用尺码', data:result.sizes, type:'multiSelect'});
            arr.push({name:'颜色', alias:'color_id', desc:'适用颜色', data:result.colors, type:'multiSelect'});
            arr.push({name:'原价', alias:'raw_price', desc:'宝贝原价格', type:'float'});
            arr.push({name:'现价', alias:'price', desc:'宝贝现价', type:'float'});
            arr.push({name:'备注', alias:'note', desc:'备注', type:'float'});
            arr.push({name:'货号', alias:'serial_number', desc:'宝贝货号', type:'string'});
            arr.push({name:'外部链接', alias:'rel_link', desc:'如果您在其他地方也有网店, 输入此链接可以跳转到该链接上', type:'string'});
            arr.push({name:'宝贝图片', alias:'serial_number', desc:'宝贝货号', type:'string'});
            callback(arr);
        });
    
}