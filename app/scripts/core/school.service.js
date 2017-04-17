/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* eslint no-else-return: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('schoolService', schoolService);

  schoolService.$inject = [
    '$firebaseArray',
    '$firebaseObject',
    'firebaseDataService'
  ];

  function schoolService(
    $firebaseArray,
    $firebaseObject,
    firebaseDataService
  ) {
    var schools = null;
    var SchoolsObject = null;

    var service = {
      School: School,
      save: save,
      getSchools: getSchools,
      getDefaultSchools: getDefaultSchools,
      reset: reset
    };

    return service;

    function School(key) {
      var school = {
        name: ''
      };
      if (key) {
        school = $firebaseObject(firebaseDataService.schools.child(key));
      } else {
        SchoolsObject = $firebaseObject(firebaseDataService.schools);
      }
      return school;
    }

    function save(school) {
      if (school.$save) {
        return school.$save();
      } else {
        var key = school.key;
        delete school.key;
        SchoolsObject[key] = school;
        return SchoolsObject.$save();
      }
    }

    function getSchools() {
      if (!schools) {
        schools = $firebaseArray(firebaseDataService.schools);
      }
      return schools;
    }

    function getDefaultSchools() {
      if (!schools) {
        schools = [
          {
            id: 1,
            name: 'James Cook Boys'
          },
          {
            id: 2,
            name: 'Marsden girls'
          }
        ];
      }
      return schools;
    }

    function reset() {
      if (schools) {
        schools.$destroy();
        schools = null;
      }
      if (SchoolsObject) {
        SchoolsObject.$destroy();
        SchoolsObject = null;
      }
    }
  }
})();
