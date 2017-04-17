/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('PlayController', PlayController);

  PlayController.$inject = [
    'layoutService'
  ];

  function PlayController(
    layoutService
  ) {
    var vm = this;

    vm.error = null;

    var tempChallengeCurrent = {
      progress: 80,
      name: 'Complete your first hands up',
      status: 'Current',
      trees: 1,
      activeKids: 0
    };
    var tempChallengeBonus = {
      progress: 0,
      name: 'How did you parents travel to school?',
      status: 'Bonus',
      trees: 5,
      activeKids: 0
    };
    var completedChallenges = [
      {
        progress: 100,
        name: 'Complete your first hands up',
        status: 'Completed',
        trees: 1,
        activeKids: 1
      },
      {
        progress: 100,
        name: 'How did you parents travel to school?',
        status: 'Completed',
        trees: 5,
        activeKids: 0
      }
    ];
    var upcomingChallenges = [
      {
        progress: 0,
        name: 'Recruit 1 extra class',
        status: 'Upcoming',
        trees: 10,
        activeKids: 0
      },
      {
        progress: 0,
        name: 'Plot your own route to school',
        status: 'Upcoming',
        trees: 2,
        activeKids: 0
      }
    ];
    vm.challengeCurrent = tempChallengeCurrent;
    vm.challengeBonus = tempChallengeBonus;
    vm.challengesCompleted = completedChallenges;
    vm.challengesUpcoming = upcomingChallenges;

    vm.firstLogin = true;
  }
})();
