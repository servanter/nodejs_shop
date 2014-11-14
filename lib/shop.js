var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Shop = sequelize.define('Shop', {
	id:Sequelize.BIGINT,
	short_name:Sequelize.STRING,
	description:Sequelize.STRING
}, {
	tableName:'shop',
	updatedAt:'update_time',
	createdAt:'create_time'
});

module.exports = Shop;