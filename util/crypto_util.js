var crypto = require('crypto');
var globalSecret = 'WESHOP';

exports.encryptAes = function(text, secret) {
    if(arguments.length == 1) {
        secret = globalSecret;
    }
    var cipher = crypto.createCipher('aes-128-cbc', secret);
    var message = cipher.update(text, 'utf8', 'hex');
    message += cipher.final('hex');
    return message;
}


exports.decryptAes = function(message, secret) {
    if(arguments.length == 1) {
        secret = globalSecret;
    }
    var cipher = crypto.createDecipher('aes-128-cbc', secret);
    var result = cipher.update(message, 'hex', 'utf8');
    result += cipher.final('utf8');
    return result;
}

exports.md5 = function(message, secret) {
    if(arguments.length == 1) {
        secret = globalSecret;
    }
    var md5 = crypto.createHash('md5');
    var content = content + '_' + secret;
    md5.update(content);
    return md5.digest('hex');
}
