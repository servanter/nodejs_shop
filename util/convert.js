exports.values2Arr = function(data) {
    var arr = [];
    for(var i = 0; i < data.length; i++) {
        arr.push(data[i].dataValues);
    }
    return arr;
}