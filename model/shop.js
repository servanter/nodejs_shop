var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Shop = sequelize.define('Shop', {
    user_id:Sequelize.BIGINT,
	short_name:Sequelize.STRING,
	description:Sequelize.STRING,
    tips:Sequelize.STRING,
    city:Sequelize.BIGINT,
    province:Sequelize.BIGINT,
    address:Sequelize.STRING,
    logo:Sequelize.STRING,
    publicity_photo:Sequelize.STRING,
    taobao_link:Sequelize.STRING,
    is_vertify:Sequelize.BOOLEAN,
}, {
	tableName:'weshop_shop',
	updatedAt:'update_time',
	createdAt:'create_time'
});

module.exports = Shop;