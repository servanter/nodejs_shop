var Item = require('./item');
var ItemClass = require('./itemclass');
var ItemPic = require('./itempic');
var Position = require('./itemposition');
var ShoeSize = require('./dictshoesize');
var Shoe = require('./shoe');
var RelShoeSize = require('./shoesizerel');
var ShoeBrand = require('./shoebrand');
var Shop = require('./shop');
var ShopPromise = require('./dictshoppromise');

Position.belongsTo(Item, {foreignKey:'id'});
Item.hasMany(Position, {foreignKey:'item_id'});

ItemPic.belongsTo(Item, {foreignKey:'id'});
Item.hasMany(ItemPic, {foreignKey:'item_id', as:'pics'});

Shoe.hasMany(ShoeSize, {foreignKey:'shoe_id', as:'sizes', through:'weshop_shoe_size_rel'});
ShoeSize.hasMany(Shoe, {foreignKey:'size_id', through:'weshop_shoe_size_rel'});

RelShoeSize.belongsTo(ShoeSize, {foreignKey:'id'});
ShoeSize.hasMany(RelShoeSize, {foreignKey:'size_id'});

Shoe.belongsTo(ShoeBrand, {foreignKey:'brand_id', as:'brand'});
ShoeBrand.hasMany(Shoe, {foreignKey:'id'});

Shop.hasMany(ShopPromise, {foreignKey:'shop_id', through:'weshop_shop_promise_rell'});
ShopPromise.hasMany(Shop, {foreignKey:'promise_id', through:'weshop_shop_promise_rell'});