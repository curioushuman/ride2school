/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var appIndex = angular.module('ride2SchoolApp.about', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about/about.html',
    controller: 'AboutCtrl'
  });
}])
.controller('AboutCtrl', function($scope) {
});
