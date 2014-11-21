var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Article = sequelize.define('article', {
    id:Sequelize.BIGINT,
    shop_id : Sequelize.BIGINT,
    user_id : Sequelize.BIGINT,
    title : Sequelize.STRING,
    content : Sequelize.STRING,
    is_del : Sequelize.BOOLEAN,
    is_verify : Sequelize.BOOLEAN
}, {
    tableName:'weshop_article',
    createdAt:'create_time',
    updatedAt:'update_time'
})

module.exports = Article;