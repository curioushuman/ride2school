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
.controller('IndexCtrl', [function() {

}]);
