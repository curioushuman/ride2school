/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var app_view_1 = angular.module('ride2SchoolApp.view1', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', [function() {

}]);
