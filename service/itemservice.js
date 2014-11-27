var async = require('async');
var Item = require('../model/item');
var ItemClass = require('../model/itemclass');
var ItemPic = require('../model/itempic');
var Position = require('../model/itemposition');
var ShoeSize = require('../model/dictshoesize');
var Shoe = require('../model/shoe');
var RelShoeSize = require('../model/shoesizerel');
var ShoeBrand = require('../model/shoebrand');
var Paging = require('../util/paging');
var Convert = require('../util/convert');
var ItemSubFactory = require('./itemsubfactory');
var relationModel = require('../model/modelrelation');

exports.findItemsByShopId = function(shopId, paging, callback) {
    console.log(this.context);
    async.waterfall([
        function(cb) {
            Item.findAll({include:[{model:Position, required:true}], where:{shop_id:shopId, is_vertify:1, on_sell:1}, offset:paging.getSinceCount(), limit:paging.getPageSize(), order:[[Position, 'update_time', 'DESC']]}, {subQuery:false}).success(function(data){
                var arr = Convert.values2Arr(data);
                cb(null, arr);
            });
        }, function(data, cb) {
            Item.count({include:[{model:Position, required:true}], where:{shop_id:shopId}}).success(function(count) {
                var pag = new Paging(count, paging.getPage(), paging.getPageSize(), data);
                cb(null, pag)
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
            var itemSubFactory = new ItemSubFactory(data.dataValues.class_id);
            if(itemSubFactory) {
                itemSubFactory.findAll({include:[{model:ShoeSize, as:'sizes', required:true, order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}}]}, {model:ShoeBrand, as:'brand', required:true}],where:{item_id:data.dataValues.id}}, {subQuery:false}).success(function(result) {
                    cb(null, {item:data.dataValues, detail:result[0].dataValues});
                })
            }
        }
        ], function(err, results) {
            callback(results);
        })
}