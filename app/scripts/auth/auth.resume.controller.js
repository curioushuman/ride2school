/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthResumeController', AuthResumeController);

  AuthResumeController.$inject = [
    '$location',
    'authService',
    'layoutService'
  ];

  function AuthResumeController(
    $location,
    authService,
    layoutService
  ) {
    var vm = this;

    vm.error = null;

    vm.resume = resume;
    vm.navigate = layoutService.navigate;

    function resume(user) {
      return authService.login(user)
        .then(function() {
          $location.path('/play');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
  }

})();
