var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShoeSizeRel = sequelize.define('ShoeSizeRel', {
    shoe_id:Sequelize.BIGINT,
    size_id:Sequelize.BIGINT,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_shoe_size_rel',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = ShoeSizeRel;