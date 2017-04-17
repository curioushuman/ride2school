/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzFootbar', gzFootbar);

  function gzFootbar() {
    return {
      templateUrl: 'scripts/layout/directives/footbar.template.html',
      restrict: 'E',
      scope: {},
      controller: FootbarController,
      controllerAs: 'vm'
    };
  }

  FootbarController.$inject = [
    '$location',
    'authService',
    'layoutService'
  ];

  function FootbarController(
    $location,
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.hide = false;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;

    vm.hideMenu = false;
    var currentPath = $location.path();
    if (
      currentPath.indexOf('begin') > -1
      || currentPath.indexOf('resume') > -1
      || authService.isLoggedIn()
    ) {
      vm.hideMenu = true;
    }

  }

})();
