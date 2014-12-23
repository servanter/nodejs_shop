var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Country = sequelize.define('Country', {
    country_name:Sequelize.STRING,
    country_ename:Sequelize.STRING
}, {
    tableName:'weshop_dict_country',
    timestamps:false
});

module.exports = Country;