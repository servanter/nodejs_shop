var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShopPromiseRel = sequelize.define('ShopPromiseRel', {
    id:Sequelize.BIGINT,
    shop_id:Sequelize.BIGINT,
    promise_id:Sequelize.BIGINT,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_shop_promise_rel',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = ShopPromiseRel;