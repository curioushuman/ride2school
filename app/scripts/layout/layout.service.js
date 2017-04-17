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
      navigate,
      logout
    };

    return service;

    ////////////

    function menu() {
      $mdSidenav('left').toggle();
    }

    function navigate(view, hash) {
      $mdSidenav('left').close();
      $location.path('/' + view);
      if (hash) {
        $location.hash(hash);
        $anchorScroll();
      }
    }

    function logout() {
      console.log('logout');
      authService.logout();
      $location.path('/');
    }

  }

})();
