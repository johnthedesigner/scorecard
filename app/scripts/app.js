'use strict';

/**
 * @ngdoc overview
 * @name scorecardApp
 * @description
 * # scorecardApp
 *
 * Main module of the application.
 */
angular
    .module('scorecardApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'chart.js'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/guide.html',
            controller: 'GuideCtrl'
        })
        .when('/reports/legoscorecard', {
            templateUrl: 'views/reports/scorecard.html',
            controller: 'ReportsScorecardCtrl',
            resolve: {
	            jsonFile: function(){
		            return {
			            jsonFileUrl: 'data/lego_scorecard.json'
			        };
		        }
	        }
        })
        .when('/reports/mattelscorecard', {
            templateUrl: 'views/reports/scorecard.html',
            controller: 'ReportsScorecardCtrl',
            resolve: {
	            jsonFile: function(){
		            return {
			            jsonFileUrl: 'data/mattel_scorecard.json'
			        };
		        }
	        }
        })
        .when('/reports/summary', {
          templateUrl: 'views/reports/summary.html',
          controller: 'ReportsSummaryCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });