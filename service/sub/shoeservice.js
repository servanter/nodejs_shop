var Shoe = require('../../model/shoe');
var ShoeSize = require('../../model/dictshoesize');
var RelShoeSize = require('../../model/shoesizerel');
var ShoeBrand = require('../../model/shoebrand');
var ModelRelation = require('../../model/modelrelation');
var ShoeMaterial = require('../../model/dictshoematerial');

exports.findDetail = function(id, callback) {
    Shoe.findAll({include:[{model:ShoeSize, as:'sizes', required:true, order:[[ShoeSize, 'id', 'DESC']], include:[{model:RelShoeSize, where:{is_valid:1}}]}, {model:ShoeBrand, as:'brand', required:true}, {model:ShoeMaterial, as:'material', required:true}],where:{item_id:id}}, {subQuery:false}).success(function(result) {
        callback(result[0].dataValues);
    })
}