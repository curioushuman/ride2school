/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var appIndex = angular.module('ride2SchoolApp.play', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play', {
    templateUrl: 'views/play/play.html',
    controller: 'PlayCtrl'
  });
}])
.controller('PlayCtrl', function($scope) {
  var tempChallengeCurrent = {
    progress: 50
  };
  $scope.challengeCurrent = tempChallengeCurrent;
});
