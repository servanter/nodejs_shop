var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShopAd = sequelize.define('ShopAd', {
    id:Sequelize.BIGINT,
    shop_id:Sequelize.BIGINT,
    pic_url:Sequelize.STRING,
    link:Sequelize.STRING,
    is_valid:Sequelize.BOOLEAN,
    is_vertify:Sequelize.BOOLEAN,
}, {
    tableName:'weshop_shop_advertsing',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = ShopAd;