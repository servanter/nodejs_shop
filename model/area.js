var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var Area = sequelize.define('Area', {
    id:Sequelize.BIGINT,
    parent_id:Sequelize.BIGINT,
    area_name:Sequelize.STRING,
    area_ename:Sequelize.STRING,
}, {
    tableName:'weshop_area',
    timestamps:false
});

module.exports = Area;