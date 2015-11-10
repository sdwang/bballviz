var request = require('request');
var promise = require('bluebird');
var q = require('q');
var fs = require('fs');
// var request = promise.promisify(request);

module.exports.reqShotChartData = function(url, callback) {
  var parseURL = url.split('/');
  var playerID = parseURL[2];
  var year = parseURL[3];

  console.log(parseURL);
  var deferred = q.defer();
  request('http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=' + year + '&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=' + playerID + '&PlusMinus=N&Position=&Rank=N&RookieYear=&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        deferred.resolve(JSON.parse(body).resultSets[0].rowSet);
        
        // console.log(JSON.parse(body).resultSets[3]);
      }
    });
  return deferred.promise;

  //'http://stats.nba.com/stats/playerdashboardbyshootingsplits?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=' + playerID + '&PlusMinus=N&Rank=N&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=',

  // var url = 'http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=' + year + '&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=' + playerID + '&PlusMinus=N&Position=&Rank=N&RookieYear=&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0';
  // var url = 'http://www.google.com';
  //  return request(url)
  //  .then(function(data) {
  //   // console.log(data.body);
  //   return JSON.parse(data.body).resultSets[0].rowSet;
  //  });
  // return request(url,
  //   function (error, response, body) {
  //     if(error) {
  //       callback(error, null);
  //     } else {
  //       console.log('response received from nba.com');
  //       //console.log(JSON.parse(body).resultSets[0].rowSet);
  //       callback(null, JSON.parse(body).resultSets[0].rowSet);
  //     //   fs.writeFile('../db/currentPlayer.txt', body, function(err) {
  //     //     if(err) {
  //     //       throw err;
  //     //     }
  //     //     console.log('current player saved in db!');
  //     //   });
  //     }
  //   });

};



// { name: 'ShotAreaPlayerDashboard',
//   headers: 
//    [ 'GROUP_SET',
//      'GROUP_VALUE',
//      'FGM',
//      'FGA',
//      'FG_PCT',
//      'FG3M',
//      'FG3A',
//      'FG3_PCT',
//      'EFG_PCT',
//      'BLKA',
//      'PCT_AST_2PM',
//      'PCT_UAST_2PM',
//      'PCT_AST_3PM',
//      'PCT_UAST_3PM',
//      'PCT_AST_FGM',
//      'PCT_UAST_FGM',
//      'CFID',
//      'CFPARAMS' ],
//   rowSet: 
//    [ [ 'Shot Area','Restricted Area',10,20,0.5,0,0,0,0.5,1,0.3,0.7,0,0,0.3,0.7,49,'Restricted Area' ],
//      [ 'Shot Area','In The Paint (Non-RA)',6,17,0.353,0,0,0,0.353,2,0.333,0.667,0,0,0.333,0.667,49,'In The Paint (Non-RA)' ],
//      [ 'Shot Area','Mid-Range',6,16,0.375,0,0,0,0.375,0,0.5,0.5,0,0,0.5,0.5,49,'Mid-Range' ],
//      [ 'Shot Area',
//        'Left Corner 3',
//        2,
//        3,
//        0.667,
//        2,
//        3,
//        0.667,
//        1,
//        0,
//        0,
//        0,
//        1,
//        0,
//        1,
//        0,
//        49,
//        'Left Corner 3' ],
//      [ 'Shot Area',
//        'Right Corner 3',
//        1,
//        4,
//        0.25,
//        1,
//        4,
//        0.25,
//        0.375,
//        0,
//        0,
//        0,
//        1,
//        0,
//        1,
//        0,
//        49,
//        'Right Corner 3' ],
//      [ 'Shot Area',
//        'Above the Break 3',
//        6,
//        21,
//        0.286,
//        6,
//        21,
//        0.286,
//        0.429,
//        0,
//        0,
//        0,
//        0.833,
//        0.167,
//        0.833,
//        0.167,
//        49,
//        'Above the Break 3' ],
//      [ 'Shot Area',
//        'Backcourt',
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        0,
//        49,
//        'Backcourt' ] ] }
