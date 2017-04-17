/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
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
      menu: menu,
      navigate: navigate,
      logout: logout
    };

    return service;

    function menu() {
      $mdSidenav('left').toggle();
    }

    function navigate(view, hash) {
      $mdSidenav('left').close();
      if (view) {
        $location.path('/' + view);
      }
      if (hash) {
        $location.hash(hash);
        $anchorScroll();
      }
    }

    function logout() {
      $mdSidenav('left').close();
      console.log('logout');
      authService.logout();
      $location.path('/');
    }
  }
})();
