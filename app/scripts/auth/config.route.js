/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/begin', {
      templateUrl: 'scripts/auth/begin.view.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
    $routeProvider.when('/resume', {
      templateUrl: 'scripts/auth/resume.view.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }

  runFunction.$inject = ['$location', 'authService', 'PROTECTED_PATHS'];

  function runFunction($location, authService, PROTECTED_PATHS) {

    authService.firebaseAuthObject.$onAuthStateChanged(function(authData) {
      if (!authData && pathIsProtected($location.path())) {
        authService.logout();
        // you might want to flash a message at this point as well
        $location.path('/');
      }
    });

    function pathIsProtected(path) {
      return PROTECTED_PATHS.indexOf(path) !== -1;
    }
  }

})();
