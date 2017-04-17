/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* eslint no-else-return: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('studentService', studentService);

  studentService.$inject = [
    '$firebaseArray',
    '$firebaseObject',
    'firebaseDataService'
  ];

  function studentService(
    $firebaseArray,
    $firebaseObject,
    firebaseDataService
  ) {
    var students = null;
    var StudentsObject = null;

    var service = {
      Student: Student,
      save: save,
      getStudents: getStudents,
      reset: reset
    };

    return service;

    function Student(key) {
      if (key) {
        return $firebaseObject(firebaseDataService.students.child(key));
      } else {
        if (!StudentsObject) {
          StudentsObject = $firebaseObject(firebaseDataService.students);
        }
        return {
          name: '',
          codename: '',
          school: null,
          schoolclass: null,
          teacher: null,
          uid: null
        };
      }
    }

    function save(student) {
      if (student.$save) {
        return student.$save();
      } else {
        var key = student.key;
        delete student.key;
        StudentsObject[key] = student;
        return StudentsObject.$save();
      }
    }

    function getStudents() {
      if (!students) {
        students = $firebaseArray(firebaseDataService.students);
      }
      return students;
    }

    function reset() {
      if (students) {
        students.$destroy();
        students = null;
      }
      if (StudentsObject) {
        StudentsObject.$destroy();
        StudentsObject = null;
      }
    }
  }
})();
