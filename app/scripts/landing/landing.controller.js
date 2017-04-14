/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['layoutService'];

  function LandingController(layoutService) {
    var vm = this;

    vm.about = layoutService.about;
    vm.blah = blah;

    function blah() {
      console.log('blah');
    }

  }

})();
