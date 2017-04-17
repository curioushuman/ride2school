/* eslint no-unused-vars: 0 */
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
      getTeacherByCodename: getTeacherByCodename,
      getTeachers: getTeachers
    };

    return service;

    ////////////

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
        var key = teacher.key;
        delete teacher.key;
        TeachersObject[key] = teacher;
        return TeachersObject.$save();
      }
    }

    function getTeacherByCodename(codename) {
      return $firebaseObject(firebaseDataService.teachers.child(codename));
    }

    function getTeachers() {
      if (!teachers) {
        teachers = $firebaseArray(firebaseDataService.teachers);
      }
      return teachers;
    }

  }

})();