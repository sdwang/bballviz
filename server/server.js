var express = require('express');
var bodyParser = require('body-parser');
var helpers = require('./helpers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

var port = process.env.PORT || 5000;

app.listen(port);
console.log("Listening on port: " + port);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/shotchartdata/*', function(req, res, next) {
  helpers.reqShotChartData(req.originalUrl)
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = app;
