var crypto = require('crypto');

exports.encryptAes = function(text, secret) {
    var cipher = crypto.createCipher('aes-128-cbc', secret);
    var message = cipher.update(text, 'utf8', 'hex');
    message += cipher.final('hex');
    return message;
}

exports.decryptAes = function(message, secret) {
    var cipher = crypto.createDecipher('aes-128-cbc', secret);
    var message = cipher.update(message, 'hex', 'utf8');
    message += cipher.final('utf8');
    return message;
}