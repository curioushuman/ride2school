/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.play')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/play', {
      templateUrl: 'scripts/play/play.view.html',
      controller: 'PlayController',
      controllerAs: 'vm'
    });
  }
})();
