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

// app.get('http://stats.nba.com/stats/playerdashboardbyshootingsplits?*',
//         function(req, res) {
//           res.data = 'hello, request recieved by server';
//           return res.data;
//         })

app.get('/test', function(req, res, next) {
  console.log('getting to server');
  res.status(200).send('hello');
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
