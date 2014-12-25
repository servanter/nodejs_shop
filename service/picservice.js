var Pic = require('../model/detailpic');

exports.batchSave = function(pics, cb) {
    if(pics && pics.length) {
        Pic.bulkCreate(pics, {fields:['detail_id', 'class_id', 'pic_url']}).success(function(result) {
            cb(result);
        })
    } else {
        cb(new Array());
    }
}