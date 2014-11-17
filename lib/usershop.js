var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var UserShop = sequelize.define('UserShop', {
    id:Sequelize.BIGINT,
    user_id: Sequelize.BIGINT,
    shop_id: Sequelize.BIGINT,
    create_time:Sequelize.NOW
}, {
    tableName:'user_shop',
    timestamps: false
});

module.exports = UserShop;