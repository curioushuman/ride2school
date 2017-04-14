/* eslint no-unused-vars: 0 */
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
    '$location',
    '$mdSidenav',
    '$anchorScroll',
    'authService'
  ];

  function WelcomeBannerController($location, authService) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn;
    vm.begin = begin;
    vm.resume = resume;

    // @TODO We need a means to detect not logged in, but school...

    function begin() {
      $location.hash('begin');
      $anchorScroll();
      // $mdSidenav('left').close();
    }

    function resume() {
      console.log('resume');
      // this essentially needs to go to login flow
      // for reference only
      // $mdSidenav('left').close();
      // $location.path('/play');
    }
  }

})();
