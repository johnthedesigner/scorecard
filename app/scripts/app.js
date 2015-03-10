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
        .when('/', {redirectTo: '/reports/highlights'})
        .when('/reports/highlights', {
            templateUrl: 'views/reports/highlights.html',
            controller: 'ReportsHighlightsCtrl',
            resolve: {
	            txtFile: function(){
		            return {
			            txtFileUrl: 'data/highlights.txt'
			        };
		        }
	        }
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
        .when('/reports/megabloksscorecard', {
            templateUrl: 'views/reports/scorecard.html',
            controller: 'ReportsScorecardCtrl',
            resolve: {
	            jsonFile: function(){
		            return {
			            jsonFileUrl: 'data/megabloks_scorecard.json'
			        };
		        }
	        }
        })
        .when('/reports/legosummary', {
            templateUrl: 'views/reports/summary.html',
            controller: 'ReportsSummaryCtrl',
            resolve: {
	            jsonFile: function(){
		            return {
			            jsonFileUrl: 'data/lego_summary.json'
			        };
		        }
	        }
        })
        .when('/reports/megablokssummary', {
            templateUrl: 'views/reports/summary.html',
            controller: 'ReportsSummaryCtrl',
            resolve: {
	            jsonFile: function(){
		            return {
			            jsonFileUrl: 'data/megabloks_summary.json'
			        };
		        }
	        }
        })
//        .when('/reports/summary', {
//          templateUrl: 'views/reports/summary.html',
//          controller: 'ReportsSummaryCtrl'
//        })
        .when('/guide', {
            templateUrl: 'views/guide.html',
            controller: 'GuideCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });