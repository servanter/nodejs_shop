var async = require('async');
var Item = require('../model/item');
var ItemClass = require('../model/itemclass');
var ItemPic = require('../model/itempic');
var Paging = require('../util/paging');
var Convert = require('../util/convert');
var Position = require('../model/itemposition');
var ItemSubFactory = require('./itemsubfactory');

Position.belongsTo(Item, {foreignKey:'id'});
ItemPic.belongsTo(Item, {foreignKey:'id'});
Item.hasMany(Position, {foreignKey:'item_id'});
Item.hasMany(ItemPic, {foreignKey:'item_id', as:'pics'});

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
            Item.findOne({include:[{model:ItemPic, as:'pics', require:true}], where:{id:id}}, {subQuery:false}).success(function(data) {
                cb(null, data);
            })
        }, function(data, cb) {
            var itemSubFactory = new ItemSubFactory(data.dataValues.class_id);
            itemSubFactory.findOne({where:{item_id:data.dataValues.id}}).success(function(result) {
                cb(null, {item:data.dataValues, detail:result.dataValues});
            })
        }
        ], function(err, results) {
            callback(results);
        })
}