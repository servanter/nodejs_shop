var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShoeMaterial = sequelize.define('ShoeMaterial', {
    material_name:Sequelize.STRING,
    description:Sequelize.STRING,
    create_time:Sequelize.DATE,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_dict_shoe_material',
    timestamps:false
});

module.exports = ShoeMaterial;
