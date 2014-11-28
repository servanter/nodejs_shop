var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Brand = sequelize.define('ShoeBrand', {
    id:Sequelize.BIGINT,
    brand_name:Sequelize.STRING,
    description:Sequelize.STRING,
    create_time:Sequelize.DATE,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_dict_shoe_brand',
    timestamps:false
});

module.exports = Brand;