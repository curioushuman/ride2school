/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
/* global firebase */
(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      users: root.child('users'),
      students: root.child('students'),
      teachers: root.child('teachers'),
      schools: root.child('schools'),
      schoolclasses: root.child('schoolclasses'),
      createKey: createKey
    };

    return service;

    function createKey(val) {
      var key = randomKey();
      if (val) {
        key = val.replace(' ', '').toLowerCase();
      }
      return key;
    }

    function randomKey() {
      var key = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      for (var i = 0; i < 10; i++) {
        key += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return key;
    }
  }
})();
