/* eslint no-unused-vars: 0 */
/* global angular */

// @TODO come back to this!
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzNavbar', gzNavbar);

  function gzNavbar() {
    return {
      templateUrl: 'scripts/layout/directives/navbar.template.html',
      restrict: 'E',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm'
    };
  }

  NavbarController.$inject = [
    '$location',
    '$mdSidenav',
    '$anchorScroll',
    'authService'
  ];

  function NavbarController(
    $location,
    $mdSidenav,
    $anchorScroll,
    authService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = menu;
    vm.begin = begin;
    vm.resume = resume;

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
