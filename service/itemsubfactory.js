var Shoe = require('../model/shoe');
var shoeService = require('./sub/shoeservice');
var noSpecifyService = require('./sub/nospecifyservice');

module.exports = function(_classId) {
    switch(_classId) {
        case 3: return shoeService;
        default : return noSpecifyService;
    }
}
