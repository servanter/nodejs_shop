var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var route = require('./lib/route');
var filter = require('./lib/filter');

var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({secret: 'keyboard cat'}))

app.get('/admin', route.adminexec('index'));
app.post('/admin/home', route.adminexec('home'));
app.get('/admin/addArticle', filter.authorize, route.adminexec('add_article'));
app.post('/admin/addArticleComplete', route.adminexec('add_article_complete'));
app.get('/admin/shop/:id', filter.authorize, route.adminexec('shop'));
app.get('/admin/createshop/', filter.authorize, route.redirect('admin/create_shop'));
app.post('/admin/createshopcomplete/', filter.authorize, route.adminexec('create_shop_complete'));

app.listen(8888);
console.log('server start at port 8888');