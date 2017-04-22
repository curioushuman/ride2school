/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzNavbar', gzNavbar);

  gzNavbar.$inject = [
    'layoutService'
  ];

  function gzNavbar(layoutService) {
    return {
      templateUrl: 'scripts/layout/directives/navbar.template.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'vm',
      link: function(scope) {
        scope.player = layoutService.player;
      }
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
