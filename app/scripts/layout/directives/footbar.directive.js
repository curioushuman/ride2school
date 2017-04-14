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
    'authService',
    'layoutService'
  ];

  function FootbarController(
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.begin = layoutService.begin;
    vm.resume = layoutService.resume;

  }

})();
