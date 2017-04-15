/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzSidebar', gzSidebar);

  function gzSidebar() {
    return {
      templateUrl: 'scripts/layout/directives/sidebar.template.html',
      restrict: 'E',
      scope: {},
      controller: SidebarController,
      controllerAs: 'vm'
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
    vm.begin = layoutService.begin;
    vm.resume = layoutService.resume;
    vm.navigate = layoutService.navigate;
    vm.support = layoutService.support;
    vm.account = layoutService.account;
    vm.logout = layoutService.logout;

  }

})();
