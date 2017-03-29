/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var appIndex = angular.module('ride2SchoolApp.intro', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intro', {
    templateUrl: 'views/intro/intro.html',
    controller: 'IntroCtrl'
  });
}])
.controller('IntroCtrl', function($scope) {
  // onboarding forms
  // show and hide the student and teacher begin mini-forms
  $scope.studentBegun = false;
  $scope.teacherBegun = false;
  $scope.beginStudent = function() {
    $scope.studentBegun = true;
  };
  $scope.beginTeacher = function() {
    $scope.teacherBegun = true;
  };
});
