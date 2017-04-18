/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* eslint no-else-return: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('sessionService', sessionService);

  sessionService.$inject = [
    '$cookies'
  ];

  function sessionService(
    $cookies
  ) {
    var service = {
      player: player,
      schoolclass: schoolclass,
      school: school,
      reset: reset
    };

    return service;

    function player(player) {
      if (player) {
        return $cookies.putObject('player', player);
      } else {
        return $cookies.getObject('player');
      }
    }

    function school(school) {
      if (school) {
        return $cookies.putObject('school', school);
      } else {
        return $cookies.getObject('school');
      }
    }

    function schoolclass(schoolclass) {
      if (schoolclass) {
        return $cookies.putObject('schoolclass', schoolclass);
      } else {
        return $cookies.getObject('schoolclass');
      }
    }

    function reset() {
      $cookies.remove('player');
      $cookies.remove('school');
      $cookies.remove('schoolclass');
    }
  }
})();
