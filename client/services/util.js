angular.module('bballApp.util', [])

.factory('Utility', function($http) {

  var series = [{
                  name: 'Shot\'s Missed',
                  color: 'rgba(223, 83, 83, .5)',
                  data: []
                },
                {
                  name: 'Shot\'s Made',
                  color: 'rgba(119, 152, 191, .5)',
                  data: []
                }];

  var missed = [];
  var made = [];

  var parseData = function(array) {
    //X-LOC: i=17, Y-LOC: i=18, madeFlag: i=20
    //x axis: -250 to 250, y axis: -20 to 200

    for(var i = 0; i < array.length; i++) {
      var shot = [];
      shot[0] = array[i][17];
      shot[1] = array[i][18];
      if(array[i][20] === 1) {
        made.push(shot);
      } else if(array[i][20] === 0) {
        missed.push(shot);
      }
    }
  };

  return {
    parseData: parseData,
    series: series,
    playerID: null, //fulfilled by form.js
    year: null, //fulfilled by form.js
    missed: missed,
    made: made,
  };

});
