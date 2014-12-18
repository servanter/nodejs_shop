var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Position = sequelize.define('Position', {
    shop_id:Sequelize.BIGINT,
    item_id:Sequelize.BIGINT,
    user_id:Sequelize.BIGINT,
    position:Sequelize.INTEGER,
    is_del:Sequelize.BOOLEAN
}, {
    tableName:'weshop_item_position',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = Position;