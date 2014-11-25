var Shoe = require('../model/shoe');

module.exports = function(_classId) {
    switch(_classId) {
        case 3: return Shoe;
        default : return undefined;
    }
}
