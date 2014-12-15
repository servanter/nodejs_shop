var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var User = sequelize.define('User', {
    id:Sequelize.BIGINT,
    user_name: Sequelize.STRING,
    user_pass: Sequelize.STRING,
    is_vertify:Sequelize.BOOLEAN
}, {
    tableName:'weshop_admin_user',
    createdAt:'create_time',
    updatedAt:'update_time'
});

module.exports = User;