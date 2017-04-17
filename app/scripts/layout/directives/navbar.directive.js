/* eslint no-unused-vars: 0 */
/* global angular */
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
    'authService',
    'layoutService'
  ];

  function NavbarController(
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;

  }

})();
