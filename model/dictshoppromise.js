var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShopPromise = sequelize.define('ShopPromise', {
    id:Sequelize.BIGINT,
    promise_name:Sequelize.STRING,
    description:Sequelize.STRING,
    pic_url:Sequelize.STRING,
    is_valid:Sequelize.BOOLEAN,
    create_time:Sequelize.DATE
}, {
    tableName:'weshop_dict_shop_promise',
    timestamps:false
});

module.exports = ShopPromise;