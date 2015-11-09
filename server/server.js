var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//app.set('view engine', 'html');
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

app.listen(8000);

app.get('/', function(req, res) {
  res.render('index.html');
});

module.exports = app;
