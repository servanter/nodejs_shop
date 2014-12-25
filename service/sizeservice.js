var async = require('async');
var RelShoeSize = require('../model/shoesizerel');

function save(size, callback) {
    RelShoeSize.create(size).complete(function(err, result) {
        if(err) {
            callback(0);
        } else {
            callback(result.id);
        }
    })
}

exports.save = save;
exports.batchSave = function(sizes, cb) {
    if(sizes && sizes.length > 0) {
        var data = new Array();
        async.eachSeries(sizes, function(item, callback) {
            save(item, function(result) {
                data.push(result);
                callback();
            })
        }, function(err) {
            cb(data);
        })
    } else {
        cb(0);
    }
}


exports.batchRelSave = function(type, sizes, cb) {
    if(sizes && sizes.length) {
        var model;
        switch(type) {
            case 3 : 
                model = RelShoeSize;
            break;
        }
        model.bulkCreate(sizes, {fields:['shoe_id', 'size_id']}).complete(function(err, result) {
            cb(result);
        })
    } else {
        cb(new Array());
    }
}
