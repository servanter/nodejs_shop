var route = {
    adminexec:function(code) {
        return require('../route/admin/' + code);
    },
    exec:function(code) {
        return require('../route/' + code);
    }

}

module.exports = route;

