var Sequelize = require('sequelize');
var sequelize = require('../../lib/sequelize');
var async = require('async');
var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/dictshoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');
var Country = require('../../model/dictcountry');
var Pic = require('../../model/detailpic');
var Color = require('../../model/dictcolor');
var Convert = require('../../util/convert');
var Constants = require('../../util/constants');
var Paging = require('../../util/paging');
var colorService = require('../colorservice');
var sizeService = require('../sizeservice');
var picService = require('../picservice');

exports.findDetail = function(id, callback) {
    Shoe.find({include:[{model:ShoeSize, as:'sizes', required:true, attributes:[['description', 'description']], order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}, attributes:[['shoe_id', 'shoe_id'],['size_id', 'size_id']]}]}, {model:ShoeBrand, as:'brand', required:true, attributes:[['brand_name', 'brand_name']]}, {model:ShoeMaterial, as:'material', required:true, attributes:[['material_name', 'material_name']]}, {model:Pic, as : 'pics', required:false, attributes:[['pic_url', 'pic_url']], where:{class_id:Constants.SubClasses.SHOE}}, {model:Country, as : 'country', required:true}],where:{id:id, is_vertify:1, on_sell:1}}, {subQuery:false}).success(function(result) {
        var attr = packageAttr(result);
        result.attr = attr;
        callback(result);
    })
}

function packageAttr(detail) {
    return [{key:'品牌名称', value:detail.brand.brand_name}, {key:'商品名称', value:detail.short_name}, {key:'产 地', value:detail.country.country_name}, {key:'材 质', value:detail.material.material_name}, {key:'备 注', value:detail.note}, {key:'货品编号', value:detail.serial_number}];
}

exports.findSearchConditions = function(shopId, param, callback) {
        async.waterfall([
            function(cb) {
                Shoe.findAll({attributes:[[Sequelize.fn('COUNT', 'brand_id'), 'total']], include:[{model:ShoeBrand, as:'brand', required:true,attributes:[['brand_name', 'brand_name'], ['id', 'id']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['brand_id'], order:[[Sequelize.fn('COUNT', 'brand_id'), 'DESC']]},{subQuery:false}).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].brand.brand_name, id:result[i].brand.id, total:result[i].dataValues.total});
                    }
                    cb(null, arr);
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
                var sql = 'SELECT c.id AS id, c.color_name AS color_name, count(c.id) AS total FROM weshop_shoe s INNER JOIN weshop_shoe_color_rel r ON r.shoe_id = s.id INNER JOIN weshop_dict_color c ON r.color_id = c.id GROUP BY  c.id ';
                sequelize.query(sql).success(function(result) {
                    var arr = [];
                    for (var i = 0; i < result.length; i++) {
                        arr.push({name:result[i].color_name, id:result[i].id, total:result[i].total});
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
    var color = {model:Color, as:'colors', required:true, attributes:[['color_name', 'color_name']]};
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
        }, function(data, cb) {
            Country.findAll({attributes:[['id', 'val'], ['country_name', 'name']]}).success(function(result) {
                cb(null, {brands:data.brands, materials:data.materials, sizes:data.sizes, colors:data.colors, countries:result});
            })
        }], function(err, result) {
            var arr = new Array();
            arr.push({name:'品牌', alias:'brand_id', desc:'所选品牌', data:result.brands, type:'select'});
            arr.push({name:'材料', alias:'material_id', desc:'所用材料' ,data:result.materials, type:'select'});
            arr.push({name:'尺码', alias:'size_id', desc:'适用尺码', data:result.sizes, type:'select', multi:true});
            arr.push({name:'颜色', alias:'color_id', desc:'适用颜色', data:result.colors, type:'select', multi:true});
            arr.push({name:'产地', alias:'from_country_id', desc:'宝贝产地', data:result.countries, type:'select'});
            arr.push({name:'原价', alias:'raw_price', desc:'宝贝原价格', type:'float'});
            arr.push({name:'现价', alias:'price', desc:'宝贝现价', type:'float'});
            arr.push({name:'备注', alias:'note', desc:'备注', type:'float'});
            arr.push({name:'货号', alias:'serial_number', desc:'宝贝货号', type:'string'});
            arr.push({name:'外部链接', alias:'rel_link', desc:'如果您在其他地方也有网店, 输入此链接可以跳转到该链接上', type:'string'});
            arr.push({name:'宝贝图片', alias:'pic', desc:'宝贝图片', type:'file', multi:true});
            callback(arr);
        });
    
}

exports.save = function (fields, files, callback) {
    if(fields && files && files.length) {
        var shoe = {
            shop_id : fields.shop_id,
            user_id : fields.user_id,
            brand_id : fields.brand_id,
            price : fields.price,
            raw_price : fields.raw_price,
            short_name : fields.short_name,
            description : fields.description,
            from_country_id : fields.from_country_id,
            material_id : fields.material_id,
            note : fields.note,
            serial_number : fields.serial_number,
            rel_link : fields.rel_link
        }
        async.waterfall([
            function(cb) {
                Shoe.create(shoe).complete(function(err, result) {
                    cb(null,result.id);
                })
            }, function(data, cb) {
                var shoeId = data;
                var colors = fields.color_id;
                var colorArr = new Array();
                if(typeof(colors) == 'object' && colors.constructor == Array) {
                    colors.forEach(function(item, index) {
                        var color = {shoe_id:shoeId, color_id:item};
                        colorArr.push(color);
                    })
                } else {
                    colorArr.push({shoe_id:shoeId, color_id:colors});
                }
                colorService.batchRelSave(Constants.SubClasses.SHOE, colorArr, function(result) {
                    if(result.length) {
                        cb(null, data);
                    }
                });
            }, function(data, cb) {
                var shoeId = data;
                var sizes = fields.size_id;
                var sizeArr = new Array();
                if(typeof(sizes) == 'object' && sizes.constructor == Array) {
                    sizes.forEach(function(item, index) {
                        var size = {shoe_id:shoeId, size_id:item};
                        sizeArr.push(size);
                    })
                } else {
                    sizeArr.push({shoe_id:shoeId, size_id:sizes});
                }
                sizeService.batchRelSave(Constants.SubClasses.SHOE, sizeArr, function(result) {
                    if(result.length) {
                        cb(null, data);
                    }
                })
            }], function(err, result) {
                    if(err) {
                        callback(false);
                    } else {
                        var shoeId = result;
                        var arr = new Array();
                        files.forEach(function(item, index) {
                            var model = {
                                    detail_id : shoeId,
                                    class_id : Constants.SubClasses.SHOE,
                                    pic_url : item
                                }

                            if(index == 0) {
                                model.is_major = 1;
                            } else {
                                model.is_major = 1;
                            }
                            arr.push(model);
                        })
                        picService.batchSave(arr, function(result) {
                            if(result.length) {
                                var item = {
                                    detail_id : shoeId,
                                    shop_id : fields.shop_id,
                                    short_name : fields.short_name,
                                    create_user_id : fields.user_id,
                                    class_id : Constants.SubClasses.SHOE,
                                    description : fields.description,
                                    pic_url : files[0],
                                    price : fields.price
                                }
                                callback({flag:true, data:item});
                            } else {
                                callback({flag:false});
                            }
                        })
                    }
            })
        
    }
}