/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('sessionService', sessionService);

  sessionService.$inject = [
    '$cookies',
    'studentService',
    'teacherService',
    'schoolService',
    'schoolclassService',
    'challengeService'
  ];

  function sessionService(
    $cookies,
    studentService,
    teacherService,
    schoolService,
    schoolclassService,
    challengeService
  ) {

    var service = {
      player: player,
      schoolclass: schoolclass,
      school: school,
      student: student,
      teacher: teacher
    };

    return service;

    ////////////

    function player(player) {
      if (player) {
        return $cookies.put('player', player);
      } else {
        return $cookies.get('player');
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

    function teacher(teacher) {
      if (teacher) {
        return $cookies.putObject('teacher', teacher);
      } else {
        return $cookies.getObject('teacher');
      }
    }

    function student(student) {
      if (student) {
        return $cookies.putObject('student', student);
      } else {
        return $cookies.getObject('student');
      }
    }

  }

})();
