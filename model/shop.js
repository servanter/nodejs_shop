var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Shop = sequelize.define('Shop', {
	id:Sequelize.BIGINT,
	short_name:Sequelize.STRING,
	description:Sequelize.STRING,
    city:Sequelize.BIGINT,
    province:Sequelize.BIGINT,
    is_vertify:Sequelize.BOOLEAN,
}, {
	tableName:'weshop_shop',
	updatedAt:'update_time',
	createdAt:'create_time'
});

module.exports = Shop;