var Item = require('../model/item');
var ItemClass = require('../model/itemclass');
var Paging = require('../util/paging');
var Position = require('../model/itemposition');

Position.belongsTo(Item, {foreignKey:'id'});
Item.hasMany(Position, {foreignKey:'item_id'});

exports.findItemsByShopId = function(shopId, paging, callback) {
    Item.findAll({include:[{model:Position, required:true}], where:{shop_id:shopId}, offset:paging.getSinceCount(), limit:paging.getPageSize()}).success(function(data){
        var arr = [];
        for(var i = 0; i < data.length; i++) {
            arr.push(data[i].dataValues);
        }

        Item.count({where:{shop_id:shopId}}).success(function(count) {
            var pag = new Paging(count, paging.getPage(), paging.getPageSize(), arr);
            callback(pag);
        })
        
    });
}

exports.findClasses = function(callback) {
    ItemClass.findAll().success(function(data) {
        var arr = [];
        for(var i = 0; i < data.length; i++) {
            arr.push(data[i].dataValues);
        }
        callback(arr);
    })
}


exports.addItemComplete = function(item, callback) {
    Item.create({
        create_user_id:item.create_user_id,
        shop_id:item.shop_id,
        class_id:item.class_id,
        short_name:item.short_name,
        description:item.description,
        price:item.price,
        pic_url:item.pic_url
    }).complete(function(err, data) {
        if(err) {
            callback(false);
        } else {
            callback(true);
        }
    })
}