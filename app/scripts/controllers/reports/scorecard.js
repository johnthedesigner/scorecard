'use strict';

/**
 * @ngdoc function
 * @name scorecardApp.controller:ScorecardCtrl
 * @description
 * # ScorecardCtrl
 * Controller of the scorecardApp
 */
angular.module('scorecardApp')
  .controller('ReportsScorecardCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/scorecard.json').success(function(data) {
        // Return Table Data
        $scope.table = data;
        // Return Number of Subsets
        $scope.subsets = (function(){
            var subsets = 0;
            var sslength = data.superSubsets.length;
            for( var x=0; x<sslength; x++ ){
                var slength = data.superSubsets[x].subsets.length;
                for ( var y=0; y<slength; y++ ){
                    subsets++;
                }
            }
            return subsets;
        })();
        // Return Number of Super Subsets
        $scope.superSubsets = (function(){
            var supersubsets = 1;
            var sslength = data.superSubsets.length;
            for( var x=0; x<sslength; x++ ){
                supersubsets++;
            }
            return supersubsets;
        })();
        $scope.decimal_rounding = (function(value,places){
	        if ( !places ) places = 2;
	        var round_decimal = parseFloat(value).toFixed(places);
	        return round_decimal;
        });
    });
}]);
