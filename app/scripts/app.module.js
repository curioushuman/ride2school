/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',
      'ngMaterial',
      'ngCookies',

      // Third party modules.
      'firebase',

      // Custom modules.
      'app.auth',
      'app.core',
      'app.landing',
      'app.why',
      'app.how',
      'app.play',
      'app.layout'
    ])
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = [
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider'
  ];

  function configFunction(
    $locationProvider,
    $routeProvider,
    $mdThemingProvider
  ) {

    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink', {
        'default': 'A400',
        'hue-1': '400',
        'hue-2': '300',
        'hue-3': '200'
      })
      .warnPalette('deep-orange')
      .backgroundPalette('grey');

  }

  runFunction.$inject = ['$rootScope', '$location'];

  function runFunction($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path('/');
      }
    });
  }

})();
