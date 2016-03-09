var request = require('request');
var promise = require('bluebird');
var q = require('q');
var fs = require('fs');

module.exports.reqShotChartData = function(url, callback) {
  var parseURL = url.split('/');
  var playerID = parseURL[2];
  var year = parseURL[3];

  var deferred = q.defer();
  request('http://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=' + year + '&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=' + playerID + '&PlusMinus=N&Position=&Rank=N&RookieYear=&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        deferred.resolve(JSON.parse(body).resultSets[0].rowSet);
      }
    });
  return deferred.promise;
};
