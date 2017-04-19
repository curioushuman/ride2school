/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.play')
    .directive('challengeCard', challengeCard);

  function challengeCard() {
    return {
      templateUrl: 'scripts/play/components/challengeCard.template.html',
      controller: ChallengeCardController,
      controllerAs: 'vm',
      bindings: {
        challenge: '<'
      },
      scope: {
        challenge: '='
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
    // console.log(vm.challenge);
    // console.log(challenge);
    console.log(this.challenge);

    if (this.challenge === undefined) {
      this.challenge = {
        progress: 80,
        name: 'Complete your first hands up',
        status: 'Current',
        trees: 1,
        activeKids: 0
      };
    }

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
