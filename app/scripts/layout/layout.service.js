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
    $anchorScroll,
    authService
  ) {

    var service = {
      menu,
      begin,
      resume,
      about,
      account,
      support,
      logout
    };

    return service;

    ////////////

    function menu() {
      $mdSidenav('left').toggle();
    }

    function begin() {
      $location.hash('begin');
      $anchorScroll();
      $mdSidenav('left').close();
    }

    function resume() {
      console.log('resume');
      // this essentially needs to go to login flow
      // for reference only
      $mdSidenav('left').close();
      // $location.path('/play');
    }

    function about(hash) {
      console.log(hash);
      $mdSidenav('left').close();
      $location.path('/about');
      if (hash) {
        $location.hash(hash);
        $anchorScroll();
      }
    }

    function support() {
      console.log('support');
    }

    function account() {
      console.log('account');
    }

    function logout() {
      authService.logout();
      $location.path('/');
    }

  }

})();
