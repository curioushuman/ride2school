/* eslint no-unused-vars: 0 */
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
      getStudentByCodename: getStudentByCodename,
      getStudents: getStudents
    };

    return service;

    ////////////

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

    function getStudentByCodename(codename) {
      return $firebaseObject(firebaseDataService.students.child(codename));
    }

    function getStudents() {
      if (!students) {
        students = $firebaseArray(firebaseDataService.students);
      }
      return students;
    }

  }

})();
