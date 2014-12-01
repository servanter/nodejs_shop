var async = require('async');
var Sequelize = require('sequelize');
var Item = require('../model/item');
var ItemClass = require('../model/itemclass');
var ItemPic = require('../model/itempic');
var Position = require('../model/itemposition');
var Color = require('../model/dictcolor');
var Paging = require('../util/paging');
var Convert = require('../util/convert');
var itemSubFactory = require('./itemsubfactory');
var relationModel = require('../model/modelrelation');

exports.findItemsByShopId = function(shopId, paging, callback) {
    async.waterfall([
        function(cb) {
            Item.findAll({include:[{model:Position, required:true}], where:{shop_id:shopId, is_vertify:1, on_sell:1}, offset:paging.getSinceCount(), limit:paging.getPageSize(), order:[[Position, 'update_time', 'DESC']]}, {subQuery:false}).success(function(data){
                var arr = Convert.values2Arr(data);
                cb(null, arr);
            });
        }, function(data, cb) {
            Item.count({include:[{model:Position, required:true}], where:{shop_id:shopId}}).success(function(count) {
                var pag = new Paging(count, paging.getPage(), paging.getPageSize(), data);
                cb(null, pag);
            })
        }
        ], function(err, results) {
            if(err) {
                throw err;
            } else {
                callback(results);
            }
        }
    )
}

exports.search = function(shopId, params, paging, callback) {
    var whereConditions = {shop_id:shopId, is_vertify:1, on_sell:1};
    if(params.a && params.a != '0') {
        var subService = new itemSubFactory.getService(parseInt(params.a));
        subService.findList(shopId, params, paging, function(result) {
            callback(result);
        });
    } else {
        async.waterfall([
            function(cb) {
                Item.findAll({where:whereConditions, offset:paging.getSinceCount(), limit:paging.getPageSize()}).success(function(data){
                    var arr = Convert.values2Arr(data);
                    cb(null, arr);
                });
            }, function(data, cb) {
                Item.count({where:whereConditions}).success(function(count) {
                    var pag = new Paging(count, paging.getPage(), paging.getPageSize(), data);
                    cb(null, pag);
                })
            }], function(err, results) {
                if(err) {
                    throw err;
                } else {
                    callback(results);
                }
            }
        )
    }
    
}

exports.findClasses = function(callback) {
    ItemClass.findAll().success(function(data) {
        var arr = Convert.values2Arr(data);
        callback(arr);
    })
}


exports.addItem = function(item, callback) {
    Item.create(item).complete(function(err, data) {
        if(err) {
            callback(false);
        } else {
            callback(true);
        }
    })
}

exports.findById = function(id, callback) {
    async.waterfall([
        function(cb) {
            Item.findOne({include:[{model:ItemPic, as:'pics', required:true}], where:{id:id}}, {subQuery:false}).success(function(data) {
                cb(null, data);
            })
        }, function(data, cb) {
            var subFactory = new itemSubFactory.getService(data.class_id);
            if(subFactory) {
                subFactory.findDetail(data.dataValues.id, function(result) {
                    cb(null, {item:data.dataValues, detail:result});
                });

            }
        }
        ], function(err, results) {
            callback(results);
        })
}

exports.findColorsByShopId = function(shopId, callback) {
    Item.findAll({attributes:[[Sequelize.fn('COUNT', 'color_id'), 'total']], include:[{model:Color, required:true, as:'color', attributes:[['color_name', 'color_name'], ['alias', 'alias']], where:{is_valid:1}}], where:{shop_id:shopId}, group:['color_id'], order:[[Sequelize.fn('COUNT', 'color_id'), 'DESC']]}, {subQuery:false}).success(function(result) {
        var arr = [];
        for (var i = 0; i < result.length; i++) {
            arr.push({name:result[i].color.color_name, href:result[i].color.alias, total:result[i].dataValues.total});
        }
        callback(arr);
    })
}

exports.findItemClassesByShopId = function (shopId, callback) {
    Item.findAll({attributes:[[Sequelize.fn('COUNT', 'class_id'), 'total']], include:[{model:ItemClass, required:true, as:'category', attributes:[['alias', 'alias'],['id', 'id'] ]}], where:{shop_id:shopId}, group:['class_id'], order:[[Sequelize.fn('COUNT', 'class_id'), 'DESC']]}, {subQuery:false}).success(function(result) {
        var arr = [];
        for (var i = 0; i < result.length; i++) {
            arr.push({name:result[i].category.alias, link:'a' + result[i].category.id + 'b0c0d0', total:result[i].dataValues.total});
        }
        callback(arr);
    })
}