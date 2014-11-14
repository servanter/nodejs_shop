var express = require('express');
var app = express();
var route = require('./lib/route');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', route.exec('index'));



app.listen(8888);
console.log('server start at port 8888');