function index(req, res) {
    if(req.session.userId) {
        res.redirect('/admin/home');
    } else {
        res.render('admin/index');
    }
}

module.exports = index;