var route = {
    exec:function(code) {
        return require('../route/' + code);
    }
}

module.exports = route;