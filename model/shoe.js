var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Shoe = sequelize.define('Shoe', {
    id:Sequelize.BIGINT,
    item_id:Sequelize.BIGINT,
    shop_id:Sequelize.BIGINT,
    user_id:Sequelize.BIGINT,
    brand_id:Sequelize.BIGINT,
    short_name:Sequelize.STRING,
    description:Sequelize.STRING,
    price:Sequelize.FLOAT,
    raw_price:Sequelize.FLOAT,
    come_from:Sequelize.STRING,
    material_id:Sequelize.BIGINT,
    color_id:Sequelize.BIGINT,
    note:Sequelize.STRING,
    serial_number:Sequelize.STRING,
    rel_link:Sequelize.STRING,
    on_sell:Sequelize.BOOLEAN,
    is_vertify:Sequelize.BOOLEAN
}, {
    tableName:'weshop_shoe',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = Shoe;
