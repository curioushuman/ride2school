/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* eslint no-else-return: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('teacherService', teacherService);

  teacherService.$inject = [
    '$firebaseArray',
    '$firebaseObject',
    'firebaseDataService'
  ];

  function teacherService(
    $firebaseArray,
    $firebaseObject,
    firebaseDataService
  ) {
    var teachers = null;
    var TeachersObject = null;

    var service = {
      Teacher: Teacher,
      save: save,
      getTeachers: getTeachers,
      reset: reset
    };

    return service;

    function Teacher(key) {
      if (key) {
        return $firebaseObject(firebaseDataService.teachers.child(key));
      } else {
        if (!TeachersObject) {
          TeachersObject = $firebaseObject(firebaseDataService.teachers);
        }
        return {
          name: '',
          codename: '',
          school: null,
          schoolclass: null,
          student: null,
          uid: null
        };
      }
    }

    function save(teacher) {
      if (teacher.$save) {
        return teacher.$save();
      } else {
        TeachersObject[teacher.key] = teacher;
        return TeachersObject.$save();
      }
    }

    function getTeachers() {
      if (!teachers) {
        teachers = $firebaseArray(firebaseDataService.teachers);
      }
      return teachers;
    }

    function reset() {
      if (teachers) {
        teachers.$destroy();
        teachers = null;
      }
      if (TeachersObject) {
        TeachersObject.$destroy();
        TeachersObject = null;
      }
    }
  }
})();
