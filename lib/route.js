var route = {
    adminexec:function(code) {
        return require('../route/admin/' + code);
    },
    exec:function(code) {
        return require('../route/' + code);
    },
    redirect:function(code) {
        return function(req, res) {res.render(code)};
    }

}

module.exports = route;

