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

//Shop.create({
//    short_name:'新品会',
//    description:'a阿斯顿大飒飒的按时按时'
//}).complete(function(err, result){console.log(result)});

module.exports = Shop;