/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzHow', gzHow);

  function gzHow() {
    return {
      templateUrl: 'scripts/layout/directives/how.template.html'
    };
  }
})();
