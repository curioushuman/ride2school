/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout', [])
    .run(runFunction);

  runFunction.$inject = ['layoutService', 'sessionService'];

  function runFunction(layoutService, sessionService) {
    var player = sessionService.player();
    if (player) {
      layoutService.setPlayer(player, player.type);
    }
    var school = sessionService.school();
    if (school) {
      layoutService.setSchool(school);
    }
    var schoolclass = sessionService.schoolclass();
    if (schoolclass) {
      layoutService.setSchoolclass(schoolclass);
    }
  }
})();
