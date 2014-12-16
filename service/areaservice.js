var Area = require('../model/area');
var sequelize = require('../lib/sequelize');

exports.findProvinces = function(callback) {
    Area.findAndCountAll({where:{parent_id:0, id:{ne:0}}}).success(function(results) {
        var arr = [];
        for(var i = 0; i < results.count; i++) {
            arr.push(results.rows[i].dataValues);
        }
        callback(arr);
    });
    
};

exports.findCitiesByProvinces = function(provinceId, callback) {
    Area.findAndCountAll({where:{parent_id:provinceId}}).success(function(results) {
        var arr = [];
        for(var i = 0; i < results.count; i++) {
            arr.push(results.rows[i].dataValues);
        }
        callback(arr);
    })
}

exports.findById = function(id, callback) {
    Area.findOne({where:{id : id}}).success(function(result) {
        callback(result);
    })
}