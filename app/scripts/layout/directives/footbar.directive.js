/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzFootbar', gzFootbar);

  gzFootbar.$inject = [
    'layoutService'
  ];

  function gzFootbar(layoutService) {
    return {
      templateUrl: 'scripts/layout/directives/footbar.template.html',
      restrict: 'E',
      controller: FootbarController,
      controllerAs: 'vm',
      link: function(scope) {
        scope.beginResume = layoutService.beginResume;
      }
    };
  }

  FootbarController.$inject = [
    '$location',
    'layoutService'
  ];

  function FootbarController(
    $location,
    layoutService
  ) {
    var vm = this;

    vm.navigate = layoutService.navigate;
  }
})();
