/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var app_view_1 = angular.module('ride2SchoolApp.view2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.controller('View2Ctrl', [function() {

}]);
