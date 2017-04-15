/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['layoutService', 'authService'];

  function LandingController(layoutService, authService) {
    var vm = this;

    vm.about = layoutService.about;
    vm.isLoggedIn = authService.isLoggedIn;
    vm.blah = blah;

    function blah() {
      console.log('blah');
    }

  }

})();
