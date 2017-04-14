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
    // @TODO I don't think I need these
    // $routeProvider.when('/register', {
    //   templateUrl: 'scripts/auth/register.html',
    //   controller: 'AuthController',
    //   controllerAs: 'vm'
    // });
    // $routeProvider.when('/login', {
    //   templateUrl: 'scripts/auth/login.html',
    //   controller: 'AuthController',
    //   controllerAs: 'vm'
    // });
  }

  runFunction.$inject = ['$location', 'authService', 'PROTECTED_PATHS'];

  function runFunction($location, authService, PROTECTED_PATHS) {

    authService.firebaseAuthObject.$onAuthStateChanged(function(authData) {
      if (!authData && pathIsProtected($location.path())) {
        authService.logout();
        // $location.path('/login');
        // you might want to flash a message at this point as well
        $location.path('/');
      }
    });

    function pathIsProtected(path) {
      return PROTECTED_PATHS.indexOf(path) !== -1;
    }
  }

})();
