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


  // Has a school been passed as a paramater
  // temp (for testing)
  var temp_school = {
    name: 'James Cook Boys'
  };
  $scope.current_school = temp_school;

  // onboarding form
  // schools
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

  // show and hide the student and teacher begin mini-forms
  $scope.studentBegun = false;
  $scope.teacherBegun = false;
  $scope.beginStudent = function() {
    $scope.studentBegun = true;
  }
  $scope.beginTeacher = function() {
    $scope.teacherBegun = true;
  }

  // sidebar functions
  $scope.openMenuOut = function() {
    $mdSidenav('left_out').toggle();
  };
  $scope.openMenuIn = function() {
    $mdSidenav('left_in').toggle();
  };
});
