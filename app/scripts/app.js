/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ride2SchoolApp', [
  'ngRoute',
  'ngMaterial',
  'ride2SchoolApp.intro',
  'ride2SchoolApp.play'
])
.config(
  [
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider',
    function($locationProvider, $routeProvider, $mdThemingProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/intro'});
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        // .accentPalette('pink')
        .accentPalette('pink', {
          'default': 'A400',
          'hue-1': '400',
          'hue-2': '300',
          'hue-3': '200'
        })
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
    }
  ]
)
.controller('AppCtrl', function($scope, $location, $anchorScroll, $mdSidenav) {
  // Has a school been passed as a paramater
  // temp (for testing)
  var tempSchool = {
    name: 'James Cook Boys'
  };
  $scope.currentSchool = tempSchool;

  // onboarding form
  // schools
  // Look at the angular phonecat to work out
  // how to create a service for your schools (using $resource etc)
  var schools = [
    {
      id: 1,
      name: 'James Cook Boys'
    },
    {
      id: 2,
      name: 'Marsden girls'
    }
  ];
  $scope.schools = schools;

  // begin / resume
  $scope.beginJourney = function() {
    $location.hash('begin');
    $anchorScroll();
    $mdSidenav('left_out').close();
  };
  // temp resume function for now
  $scope.resumeJourney = function() {
    $location.path('/play');
  };

  // sidebar functions
  $scope.openMenuOut = function() {
    $mdSidenav('left_out').toggle();
  };
  $scope.openMenuIn = function() {
    $mdSidenav('left_in').toggle();
  };
});
