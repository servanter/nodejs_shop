exports.findDetail = function(id, callback) {
    callback(undefined);
}

exports.findSearchConditions = function(param, callback) {
	var data = [[{name:'白色', href:'a0b1'},{name:'红色', href:'a0b1'}, {name:'蓝色', href:'a0b1'}, {name:'黄色', href:'a0b1'}], [{name:'50-100', href:'a0b1'}, {name:'100-200', href:'a0b1'}]];
	callback(data);
}