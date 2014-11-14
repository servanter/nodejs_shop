var express = require('express');
var app = express();
var route = require('./lib/route');
var bodyParser = require('body-parser');



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get('/', route.exec('index'));
app.get('/addArticle', route.exec('add_article'));

app.post('/addArticleComplete', route.exec('add_article_complete'));


app.listen(8888);
console.log('server start at port 8888');