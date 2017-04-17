/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzWelcomeBanner', gzWelcomeBanner);

  function gzWelcomeBanner() {
    return {
      templateUrl: 'scripts/layout/directives/welcomeBanner.template.html',
      controller: WelcomeBannerController,
      controllerAs: 'vm'
    };
  }

  WelcomeBannerController.$inject = [
    'authService',
    'layoutService'
  ];

  function WelcomeBannerController(
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;
  }
})();
