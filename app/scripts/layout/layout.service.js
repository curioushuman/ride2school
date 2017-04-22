/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .factory('layoutService', layoutService);

  layoutService.$inject = [
    '$location',
    '$mdSidenav',
    '$anchorScroll',
    'authService',
    'studentService',
    'schoolService',
    'schoolclassService',
    'sessionService'
  ];

  function layoutService(
    $location,
    $mdSidenav,
    $anchorScroll,
    authService,
    studentService,
    schoolService,
    schoolclassService,
    sessionService
  ) {
    var player = new studentService.Student();
    var school = new schoolService.School();
    var schoolclass = new schoolclassService.Schoolclass();

    var beginResume = {
      show: true
    };

    var service = {
      player: player,
      setPlayer: setPlayer,
      school: school,
      setSchool: setSchool,
      schoolclass: schoolclass,
      setSchoolclass: setSchoolclass,
      menu: menu,
      navigate: navigate,
      logout: logout,
      reset: reset,
      beginResume: beginResume,
      toggleBeginResume: toggleBeginResume
    };

    return service;

    function setPlayer(obj, type) {
      player.type = type;
      player.key = obj.key;
      player.name = obj.name;
      player.codename = obj.codename;
      return sessionService.player(player);
    }

    function setSchool(obj) {
      school.key = obj.key;
      school.name = obj.name;
      return sessionService.school(this.school);
    }

    function setSchoolclass(obj, type) {
      schoolclass.key = obj.key;
      schoolclass.name = obj.name;
      return sessionService.schoolclass(this.schoolclass);
    }

    function menu() {
      $mdSidenav('left').toggle();
    }

    function navigate(view, hash) {
      // still needs some work on resume and begin
      console.log(view);
      $mdSidenav('left').close();
      if (view) {
        console.log('change view');
        $location.path('/' + view);
      }
      if (hash) {
        console.log('change hash');
        $location.hash(hash);
        $anchorScroll();
      }
    }

    function reset() {
      this.player = new studentService.Student();
      this.school = new schoolService.School();
      this.schoolclass = new schoolclassService.Schoolclass();
    }

    function logout() {
      $mdSidenav('left').close();
      service.reset();
      sessionService.reset();
      authService.logout();
      $location.path('/');
    }

    function toggleBeginResume() {
      beginResume.show = true;
      if (
        $location.path().indexOf('begin') > -1 ||
        $location.path().indexOf('resume') > -1 ||
        authService.isLoggedIn()
      ) {
        beginResume.show = false;
      }
    }
  }
})();
