var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Article = sequelize.define('article', {
    id:Sequelize.BIGINT,
    shop_id : Sequelize.BIGINT,
    is_del : Sequelize.BOOLEAN,
    is_verify : Sequelize.BOOLEAN
}, {
    tableName:'article',
    createdAt:'create_time',
    updatedAt:'update_time'
})

module.exports = Article;