/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
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
    'sessionService',
    'layoutService'
  ];

  function NavbarController(
    authService,
    sessionService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;

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
