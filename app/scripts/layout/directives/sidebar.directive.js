/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
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
    'layoutService',
    'sessionService'
  ];

  function SidebarController(
    authService,
    layoutService,
    sessionService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;
    vm.support = layoutService.support;
    vm.account = layoutService.account;
    vm.logout = layoutService.logout;

    vm.teacher = sessionService.teacher();
    vm.student = sessionService.student();
    vm.school = sessionService.school();
    vm.schoolclass = sessionService.schoolclass();
    vm.player = {
      type: sessionService.player()
    };
    if (vm.player.type === 'student') {
      vm.player.codename = vm.student.codename;
    } else {
      vm.player.codename = vm.teacher.codename;
    }
  }
})();
