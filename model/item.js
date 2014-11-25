var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');
var ItemPic = require('./itempic');

var Item = sequelize.define('Item', {
    id:Sequelize.BIGINT,
    shop_id:Sequelize.BIGINT,
    create_user_id:Sequelize.BIGINT,
    class_id:Sequelize.BIGINT,
    short_name:Sequelize.STRING,
    description:Sequelize.STRING,
    pic_url:Sequelize.STRING,
    price:Sequelize.FLOAT,
    on_sell:Sequelize.BOOLEAN,
    is_vertify:Sequelize.BOOLEAN,
}, {
    tableName:'weshop_item',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = Item;