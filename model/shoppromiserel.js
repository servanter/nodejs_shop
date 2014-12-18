var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShopPromiseRel = sequelize.define('ShopPromiseRel', {
    shop_id:Sequelize.BIGINT,
    promise_id:Sequelize.BIGINT
}, {
    tableName:'weshop_shop_promise_rel',
    timestamps:flase;
});

module.exports = ShopPromiseRel;