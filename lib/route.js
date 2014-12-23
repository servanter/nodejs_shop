var route = {
    adminexec:function(code) {
        return require('../route/admin/' + code);
    },
    exec:function(code) {
        return require('../route/' + code);
    },
    redirect:function(code) {
        return function(req, res) {res.render(code)};
    },
    adminRender:function() {
        return function(req, res) {
            var template = req.params.template;
            return res.render('admin/inc/' + template, {data:{}});
        };
    }

}

module.exports = route;

