var express = require('express');
var app = express();

var index = require('./route/index');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', index);



app.listen(8888);
console.log('server start at port 8888');