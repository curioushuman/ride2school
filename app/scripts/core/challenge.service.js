/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('challengeService', challengeService);

  challengeService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function challengeService($firebaseArray, firebaseDataService) {
    var challenges = null;

    var service = {
      Challenge: Challenge,
      getChallengesByUser: getChallengesByUser,
      reset: reset
    };

    return service;

    function Challenge() {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
    }

    function getChallengesByUser(uid) {
      if (!challenges) {
        challenges = $firebaseArray(
          firebaseDataService.users.child(uid).child('challenges')
        );
      }
      return challenges;
    }

    function reset() {
      if (challenges) {
        challenges.$destroy();
        challenges = null;
      }
    }
  }
})();
