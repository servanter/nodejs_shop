var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShoeColorRel = sequelize.define('ShoeColorRel', {
    shoe_id:Sequelize.BIGINT,
    color_id:Sequelize.BIGINT,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_shoe_color_rel',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = ShoeColorRel;