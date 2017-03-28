/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ride2SchoolApp', [
  'ngRoute',
  'ngMaterial',
  'ride2SchoolApp.index'
])
.config(
  [
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider',
    function($locationProvider, $routeProvider, $mdThemingProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/index'});
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
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
.controller('AppCtrl', function($scope, $mdSidenav) {

  // whether a new school has been specified or not
  var temp_school = {
    name: 'James Cook Boys'
  };
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
  $scope.current_school = temp_school;

  // sidebar functions
  $scope.openMenuOut = function() {
    $mdSidenav('left_out').toggle();
  };
  $scope.openMenuIn = function() {
    $mdSidenav('left_in').toggle();
  };
});
