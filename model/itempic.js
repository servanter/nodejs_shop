var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Pic = sequelize.define('ItemPic', {
    id:Sequelize.BIGINT,
    item_id:Sequelize.BIGINT,
    pic_url:Sequelize.STRING,
    create_time:Sequelize.DATE,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_item_pic',
    timestamps:false
})

module.exports = Pic;