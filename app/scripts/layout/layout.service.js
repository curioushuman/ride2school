/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .factory('layoutService', layoutService);

  layoutService.$inject = [
    '$location',
    '$mdSidenav',
    '$anchorScroll',
    'authService'
  ];

  function layoutService(
    $location,
    $mdSidenav,
    $anchorScroll
  ) {

    var service = {
      menu,
      begin,
      resume
    };

    return service;

    ////////////

    function menu() {
      $mdSidenav('left').toggle();
    }

    function begin() {
      $location.hash('begin');
      $anchorScroll();
      // $mdSidenav('left').close();
    }

    function resume() {
      console.log('resume');
      // this essentially needs to go to login flow
      // for reference only
      // $mdSidenav('left').close();
      // $location.path('/play');
    }

  }

})();
