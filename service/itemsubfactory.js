var Shoe = require('../model/shoe');
var shoeService = require('./sub/shoeservice');
var noSpecifyService = require('./sub/nospecifyservice');

exports.getService = function(_classId) {
	var service;
    switch(_classId) {
        case 3: service = shoeService;
        break;
       default : service = noSpecifyService;
    }
    return service;
}