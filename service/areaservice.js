var Area = require('../lib/area');
var sequelize = require('../lib/sequelize');
var eventproxy = require('eventproxy');
var proxy = new eventproxy();
var emitter = require('../lib/eventemitter').emitter;


exports.findProvinces = function(callback) {
    Area.findAndCountAll({where:{parent_id:0, id:{ne:0}}}).success(function(results) {
        var arr = [];
        for(var i = 0; i < results.count; i++) {
            arr.push(results.rows[i].dataValues);
        }
        callback(arr);
    });
    
    
};