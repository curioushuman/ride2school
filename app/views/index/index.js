/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var appIndex = angular.module('ride2SchoolApp.index', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'views/index/index.html',
    controller: 'IndexCtrl'
  });
}])
.controller('IndexCtrl', function($scope) {

  // onboarding forms
  // show and hide the student and teacher begin mini-forms
  $scope.studentBegun = false;
  $scope.teacherBegun = false;
  $scope.beginStudent = function() {
    $scope.studentBegun = true;
  }
  $scope.beginTeacher = function() {
    $scope.teacherBegun = true;
  }

});
