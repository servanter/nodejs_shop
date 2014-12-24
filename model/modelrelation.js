var Item = require('./item');
var ItemClass = require('./itemclass');
var Pic = require('./detailpic');
var Position = require('./itemposition');
var ShoeSize = require('./dictshoesize');
var Shoe = require('./shoe');
var RelShoeSize = require('./shoesizerel');
var ShoeBrand = require('./dictshoebrand');
var Shop = require('./shop');
var ShopPromise = require('./dictshoppromise');
var ShoeMaterial = require('./dictshoematerial');
var Color = require('./dictcolor');
var ShopAd = require('./shopad');
var Country = require('./dictcountry');
var RelShoeColor = require('./shoecolorrel');

Position.belongsTo(Item, {foreignKey:'id'});
Item.hasMany(Position, {foreignKey:'item_id'});

Item.belongsTo(ItemClass, {foreignKey:'class_id', as:'category'});
ItemClass.hasMany(Item, {foreignKey:'id'});




Shoe.hasMany(ShoeSize, {foreignKey:'shoe_id', as:'sizes', through:'weshop_shoe_size_rel'});
ShoeSize.hasMany(Shoe, {foreignKey:'size_id', through:'weshop_shoe_size_rel'});

Shoe.hasMany(Color, {foreignKey:'shoe_id', as : 'colors', through:'weshop_shoe_color_rel'});
Color.hasMany(Shoe, {foreignKey:'color_id', as : 'shoes', through:'weshop_shoe_color_rel'});

RelShoeSize.belongsTo(ShoeSize, {foreignKey:'id'});
ShoeSize.hasMany(RelShoeSize, {foreignKey:'size_id'});

Shoe.hasMany(RelShoeSize, {foreignKey:'id', as:'relShoeSizes'});
RelShoeSize.belongsTo(Shoe, {foreignKey:'shoe_id'});

Shoe.belongsTo(ShoeBrand, {foreignKey:'brand_id', as:'brand'});
ShoeBrand.hasMany(Shoe, {foreignKey:'id'});

Shop.hasMany(ShopPromise, {foreignKey:'shop_id', through:'weshop_shop_promise_rell'});
ShopPromise.hasMany(Shop, {foreignKey:'promise_id', through:'weshop_shop_promise_rell'});

Shoe.belongsTo(ShoeMaterial, {foreignKey:'material_id',as:'material'});
ShoeMaterial.hasMany(Shoe, {foreignKey:'id'});

// Shoe.belongsTo(Color, {foreignKey:'color_id', as:'color'});
// Color.hasMany(Shoe, {foreignKey:'id'});

Shoe.hasMany(Pic, {foreignKey:'detail_id', as:'pics'});
Pic.belongsTo(Shoe, {foreignKey:'id'});

Shoe.belongsTo(Country, {foreignKey:'from_country_id', as : 'country'});
Country.hasMany(Shoe, {foreignKey:'id'});

Shop.hasMany(ShopPromise, {foreignKey:'shop_id', as:'promises', through:'weshop_shop_promise_rel'});
ShopPromise.hasMany(Shop, {foreignKey:'promise_id', through:'weshop_shop_promise_rel'});

Shop.hasMany(ShopAd, {foreignKey : 'shop_id', as : 'ads'});
ShopAd.belongsTo(Shop, {foreignKey : 'id'})