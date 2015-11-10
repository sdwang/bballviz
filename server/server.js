var express = require('express');
var bodyParser = require('body-parser');
var helpers = require('./helpers');
var promise = require('bluebird');

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

app.get('/shotchartdata/*', function(req, res, next) {
  console.log('getting to server');
  var reqShotChartDataPromise = promise.promisify(helpers.reqShotChartData);
  reqShotChartDataPromise(req.originalUrl)
    .then(function(data) {
      console.log('data returned to server.js');
      console.log(data);
      return res.status(200).send(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  //res.status(200).send('Test GET request recieved by server');
  next();
});

// app.use('/test', function(req, res, next) {
//   // GET 'http://www.example.com/admin/new'
//   console.log(req.originalUrl); // '/admin/new'
//   console.log(req.baseUrl); // '/admin'
//   console.log(req.path); // '/new'
//   res.send(200, 'hello');
//   next();
// });

module.exports = app;
