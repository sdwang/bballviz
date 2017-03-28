var request = require('request');
var promise = require('bluebird');
var q = require('q');
var fs = require('fs');

module.exports.reqShotChartData = function(url, callback) {
  var parseURL = url.split('/');
  var playerID = parseURL[2];
  var year = parseURL[3];
  var requestUrl = 'http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=' + year + '&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=' + playerID + '&PlusMinus=N&PlayerPosition=&Rank=N&RookieYear=&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0';
  console.log(requestUrl);

  var deferred = q.defer();
  request(requestUrl,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('recieved player data');
        deferred.resolve(JSON.parse(body).resultSets[0].rowSet);
      } else {
        console.log('Could not retrieve player information');
        console.log(error);
        deferred.reject('Could not retrieve player information');
      }
    });
  return deferred.promise;
};
