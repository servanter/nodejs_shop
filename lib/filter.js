exports.authorize = function(req, res, next) {
  if (!req.session.userId) {
    res.redirect('/admin/');
  } else {
    next();
  }
}