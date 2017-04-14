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
      templateUrl: 'scripts/layout/navbar.html',
      restrict: 'E',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm'
    };
  }

  NavbarController.$inject = ['$location', 'authService'];

  function NavbarController($location, authService) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.logout = logout;

    function logout() {
      authService.logout();
      $location.path('/');
    }
  }

})();
