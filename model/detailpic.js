var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Pic = sequelize.define('Pic', {
    pic_url:Sequelize.STRING,
    create_time:Sequelize.DATE,
    is_major:Sequelize.BOOLEAN,
    is_valid:Sequelize.BOOLEAN
}, {
    tableName:'weshop_detail_pic',
    timestamps:false
})

module.exports = Pic;