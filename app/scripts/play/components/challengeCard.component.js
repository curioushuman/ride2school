/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.play')
    .component('gzChallengeCard', gzChallengeCard);

  function gzChallengeCard() {
    return {
      templateUrl: 'scripts/play/components/challengeCard.template.html',
      controller: ChallengeCardController,
      controllerAs: 'vm',
      bindings: {
        challenge: '<'
      }
    };
  }

  ChallengeCardController.$inject = [
    'authService',
    'layoutService'
  ];

  function ChallengeCardController(
    authService,
    layoutService
  ) {
    var vm = this;
console.log(vm.challenge);
    // legacy code that needs to be modified
    vm.showActiveKids = false;
    vm.badgeColour = 'warn';
    vm.disable = false;
    vm.progressWidth = 90;
    if (vm.challenge.status === 'Current') {
      vm.backgroundColour = 'accent-hue-1';
    } else if (vm.challenge.status === 'Bonus') {
      vm.backgroundColour = 'warn-hue-1';
      vm.disable = true;
    } else if (vm.challenge.status === 'Upcoming') {
      vm.backgroundColour = 'background-hue-3';
      vm.disable = true;
    } else {
      vm.progressWidth = 80;
      if (vm.challenge.activeKids > 0) {
        vm.showActiveKids = true;
      }
      vm.badgeColour = 'primary';
      vm.backgroundColour = 'background';
    }
    vm.challengeClass = 'enable';
    if (vm.disable === true) {
      vm.challengeClass = 'disable';
    }

  }

})();
