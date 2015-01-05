var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var flash = require('connect-flash');
var route = require('./lib/route');
var filter = require('./lib/filter');

var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('app_domain', 'localhost:8888');
app.set('img_path', '/images');
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({secret: 'keyboard cat'}))
app.use(flash()); // error success message

/* admin management */
/* home controller */
app.get('/admin/register/', route.redirect('admin/register'));
app.get('/admin/forgetpassword/', route.redirect('index'));

app.get('/admin/', route.adminexec('index'));
app.get('/logout', route.adminexec('user').logout);
app.post('/admin/home/', route.adminexec('home'));
app.get('/admin/home/', filter.authorize, route.adminexec('home'));
app.get('/admin/shop/', filter.authorize, route.adminexec('shop').list);

app.get('/admin/shop/pg:page.html', filter.authorize, route.adminexec('shop').list);

/* shop controller */
app.get('/admin/shop/:shopId/addarticle/', filter.authorize, route.adminexec('article').addArticle);
app.post('/admin/shop/:shopId/addarticlecomplete/', filter.authorize, route.adminexec('article').addArticleComplete);
app.get('/admin/shop/:id(\\d+)/', filter.authorize, route.adminexec('shop').detail);
app.get('/admin/shop/addshop/', filter.authorize, route.adminexec('shop').addShop);
app.get('/admin/shop/:id/entereditshop/', filter.authorize, route.adminexec('shop').enterEditShop);
app.post('/admin/shop/editshop/:id/', filter.authorize, route.adminexec('shop').editShop);
app.get('/admin/shop/:id/entereditbanner/', filter.authorize, route.adminexec('shop').enterEditBanner);
app.post('/admin/shop/editbanner/:id/', filter.authorize, route.adminexec('shop').editBanner);
app.get('/admin/cities/', filter.authorize, route.adminexec('shop').getCities);
app.post('/admin/shop/createshopcomplete/', filter.authorize, route.adminexec('shop').addShopComplete);
app.get('/admin/:id/item/enteradditem/', filter.authorize, route.adminexec('item').enteradditem);
app.post('/admin/:id/item/additem/', filter.authorize, route.adminexec('item').additem);
app.get('/admin/shop/:id/entereditindexposition/', filter.authorize, route.adminexec('item').enterEditPosition);
app.get('/admin/item/getSubAttributes', filter.authorize, route.adminexec('item').getSubAttributes);
app.get('/admin/item/removePositions/', filter.authorize, route.adminexec('item').removePositions);
app.get('/admin/ajax/item/:id/', filter.authorize, route.adminexec('item').getById);
app.post('/admin/ajax/item/add/:id', filter.authorize, route.adminexec('item').addIndexPosition);

app.get('/admin/user/checkusername/', route.adminexec('user').checkUserName);
app.post('/admin/user/adduser/', route.adminexec('user').addUser);

/* user display */
app.get('/shop/:id/', route.exec('shop').detail);

app.get('/item/:id.html', route.exec('item').detail);

app.get('/shop/:id/list/', route.exec('list').list);
app.get('/shop/:id/list/pg:page.html', route.exec('list').list);
app.get('/shop/:id/list/a:a?b:b?c:c?d:d?/', route.exec('list').list);
app.get('/shop/:id/list/a:a?b:b?c:c?d:d/pg:page.html', route.exec('list').list);
app.get('/shop/:id/list/a:a?b:b?c:c?d:d?e:e/', route.exec('list').list);
app.get('/shop/:id/list/a:a?b:b?c:c?d:d?e:e/pg:page.html', route.exec('list').list);

app.get('/shop/:id/introduce/', route.exec('shop').introduce);
app.listen(8888);
console.log('server start at port 8888');
