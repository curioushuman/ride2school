/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = [
    '$firebaseAuth',
    '$cookies',
    'firebaseDataService',
    'studentService',
    'teacherService',
    'schoolService',
    'schoolclassService',
    'challengeService'
  ];

  function authService(
    $firebaseAuth,
    $cookies,
    firebaseDataService,
    studentService,
    teacherService,
    schoolService,
    schoolclassService,
    challengeService
  ) {
    var firebaseAuthObject = $firebaseAuth();

    var service = {
      firebaseAuthObject: firebaseAuthObject,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail
    };

    return service;

    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    }

    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(
        user.email,
        user.password
      );
    }

    function logout() {
      // challengeService.reset();
      // studentService.reset();
      // teacherService.reset();
      // schoolService.reset();
      // schoolclassService.reset();
      firebaseAuthObject.$signOut();
    }

    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
  }
})();
