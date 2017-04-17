/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('schoolclassService', schoolclassService);

  schoolclassService.$inject = [
    '$firebaseArray',
    '$firebaseObject',
    'firebaseDataService'
  ];

  function schoolclassService(
    $firebaseArray,
    $firebaseObject,
    firebaseDataService
  ) {

    var schoolclasses = null;
    var SchoolclassesObject = null;

    var service = {
      Schoolclass: Schoolclass,
      save: save,
      getSchoolclasses: getSchoolclasses
    };

    return service;

    ////////////

    function Schoolclass(key) {
      if (key) {
        return $firebaseObject(firebaseDataService.schoolclasses.child(key));
      } else {
        if (!SchoolclassesObject) {
          SchoolclassesObject = $firebaseObject(firebaseDataService.schoolclasses);
        }
        return {
          name: '',
          year: '',
          count: '',
          school: null,
          teacher: null,
          student: null
        };
      }
    }

    function save(schoolclass) {
      if (schoolclass.$save) {
        return schoolclass.$save();
      } else {
        var key = schoolclass.key;
        delete schoolclass.key;
        SchoolclassesObject[key] = schoolclass;
        return SchoolclassesObject.$save();
      }
    }

    function getSchoolclasses() {
      if (!schoolclasses) {
        schoolclasses = $firebaseArray(firebaseDataService.schoolclasses);
      }
      return schoolclasses;
    }

  }

})();
