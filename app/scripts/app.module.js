/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
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
      .primaryPalette('blue', {
        'default': 'A700',
        'hue-1': 'A400',
        'hue-2': 'A200',
        'hue-3': 'A100'
      })
      .accentPalette('yellow', {
        'default': 'A700',
        'hue-1': 'A400',
        'hue-2': 'A200',
        'hue-3': 'A100'
      })
      .warnPalette('green', {
        'default': 'A700',
        'hue-1': 'A400',
        'hue-2': 'A200',
        'hue-3': 'A100'
      })
      .backgroundPalette('grey');
  }

  runFunction.$inject = ['$rootScope', '$location'];

  function runFunction($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/');
      }
    });
  }
})();
