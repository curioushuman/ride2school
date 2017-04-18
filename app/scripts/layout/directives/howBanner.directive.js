/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzHowBanner', gzHowBanner);

  function gzHowBanner() {
    return {
      templateUrl: 'scripts/layout/directives/howBanner.template.html',
      controller: HowBannerController,
      controllerAs: 'vm'
    };
  }

  HowBannerController.$inject = [
    'authService',
    'layoutService'
  ];

  function HowBannerController(
    authService,
    layoutService
  ) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.menu = layoutService.menu;
    vm.navigate = layoutService.navigate;
  }
})();
