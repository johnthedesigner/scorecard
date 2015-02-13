'use strict';

/**
 * @ngdoc function
 * @name scorecardApp.controller:ReportsSummaryCtrl
 * @description
 * # ReportsSummaryCtrl
 * Controller of the scorecardApp
 */
angular.module('scorecardApp')
  .controller('ReportsSummaryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/summary.json').success(function(data) {
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
        //$scope.tableWidth = data.superSubsets[0].subsets.length;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
}]);
