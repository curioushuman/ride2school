/* eslint no-unused-vars: 0 */
/* global angular */
'use strict';

var appIndex = angular.module('ride2SchoolApp.play', [
  'ngRoute',
  'ngMaterial'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play', {
    templateUrl: 'views/play/play.html',
    controller: 'PlayCtrl'
  });
}])
.controller('PlayCtrl', function($scope) {
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
  $scope.challengeCurrent = tempChallengeCurrent;
  $scope.challengeBonus = tempChallengeBonus;
  $scope.challengesCompleted = completedChallenges;
  $scope.challengesUpcoming = upcomingChallenges;
})
.component('challengeCard', {
  templateUrl: 'views/play/components/challenge-card.template.html',
  controller: ['$routeParams', function ChallengeCardController($routeParams) {
    var ctrl = this;
    ctrl.showActiveKids = false;
    ctrl.badgeColour = 'warn';
    ctrl.disable = false;
    if (ctrl.challenge.status == 'Current') {
      ctrl.backgroundColour = 'accent-hue-1';
    }
    else if (ctrl.challenge.status == 'Bonus') {
      ctrl.backgroundColour = 'warn-hue-1';
      ctrl.disable = true;
    }
    else if (ctrl.challenge.status == 'Upcoming') {
      ctrl.backgroundColour = 'background-hue-3';
      ctrl.disable = true;
    }
    else {
      if (ctrl.challenge.activeKids > 0) {
        ctrl.showActiveKids = true;
      }
      ctrl.badgeColour = 'primary';
      ctrl.backgroundColour = 'background';
    }
    ctrl.challengeClass = 'enable';
    if (ctrl.disable === true) {
      ctrl.challengeClass = 'disable';
    }
  }],
  bindings: {
    challenge: '<'
  }
});
