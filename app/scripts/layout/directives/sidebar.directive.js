/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzSidebar', gzSidebar);

  gzSidebar.$inject = [
    'layoutService'
  ];

  function gzSidebar(layoutService) {
    return {
      templateUrl: 'scripts/layout/directives/sidebar.template.html',
      restrict: 'E',
      controller: SidebarController,
      controllerAs: 'vm',
      link: function (scope) {
        scope.player = layoutService.player;
        scope.school = layoutService.school;
        scope.schoolclass = layoutService.schoolclass;
      }
    };
  }

  SidebarController.$inject = [
    'authService',
    'layoutService'
  ];

  function SidebarController(
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;
    vm.logout = layoutService.logout;
  }
})();
