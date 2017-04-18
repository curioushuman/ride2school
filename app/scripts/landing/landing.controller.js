/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['$location', 'layoutService', 'authService'];

  function LandingController($location, layoutService, authService) {
    var vm = this;

    vm.navigate = layoutService.navigate;
    vm.isLoggedIn = authService.isLoggedIn;
  }
})();
