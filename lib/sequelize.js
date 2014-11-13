var Sequelize = require('sequelize');
var dbOptions = {dialect:'mysql', port:3306};
var sequelize = new Sequelize('wechat_shop', 'root', '123456', dbOptions);
module.exports = sequelize;