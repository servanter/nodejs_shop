var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Color = sequelize.define('Color', {
    color_name:Sequelize.STRING,
    create_time:Sequelize.NOW,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_dict_color',
    timestamps:false
});

module.exports = Color;