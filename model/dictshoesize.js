var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ShoeSize = sequelize.define('ShoeSize', {
    id:Sequelize.BIGINT,
    size:Sequelize.FLOAT,
    description:Sequelize.STRING,
    create_time:Sequelize.DATE
}, {
    tableName:'weshop_dict_shoe_size',
    timestamps:false
});

module.exports = ShoeSize;