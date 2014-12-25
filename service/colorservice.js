var RelShoeColor = require('../model/shoecolorrel');

exports.batchRelSave = function(type, colors, cb) {
    if(colors && colors.length > 0) {
        var data = new Array();
        var model;
        switch(type) {
            case 3 : 
                model = RelShoeColor;
            break;
        }
        model.bulkCreate(colors, {fields:['shoe_id', 'color_id']}).complete(function(err, result) {
            cb(result);
        })
    } else {
        cb(new Array());
    }
}