/* eslint no-unused-vars: 0 */
/* eslint require-jsdoc: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthResumeController', AuthResumeController);

  AuthResumeController.$inject = [
    '$location',
    'authService',
    'schoolService',
    'studentService',
    'teacherService',
    'schoolclassService',
    'layoutService'
  ];

  function AuthResumeController(
    $location,
    authService,
    schoolService,
    studentService,
    teacherService,
    schoolclassService,
    layoutService
  ) {
    var vm = this;

    vm.error = null;
    vm.debug = false;

    vm.resume = resume;
    vm.navigate = layoutService.navigate;

    vm.school = new schoolService.School();
    vm.schoolclass = new schoolclassService.Schoolclass();
    vm.schools = schoolService.getSchools();
    vm.schoolsLoading = true;
    vm.schools.$loaded()
      .then(function(schools) {
        vm.schoolsLoading = false;
      });

    vm.user = {
      email: '',
      password: ''
    };

    vm.player = 'student';

    vm.working = false;
    vm.matchScore = 0;

    if (vm.debug) {
      authService.logout();
      // vm.schoolclass.school = 'jamescookboyshighschool';
      vm.schoolclass.name = 'Test class';
      // vm.schoolclass.year = 3;
      vm.schoolclass.count = 30;
      vm.user.password = 'johnjohn';
    }

    function resume(user) {
      vm.working = true;

      // first we want to find records that match this information
      // search by classname
      var schoolclasses = schoolclassService.getSchoolsByClassname(
        vm.schoolclass.name
      );
      var schoolclass = null;
      schoolclasses.$loaded()
        .then(function() {
          vm.matchScore = 0;
          if (schoolclasses[0]) {
            schoolclass = schoolclasses[0];
            vm.matchScore++;
            if (schoolclass.school === vm.schoolclass.school) {
              vm.matchScore++;
            }
            if (schoolclass.year === vm.schoolclass.year) {
              vm.matchScore++;
            }
            if (schoolclass.count === vm.schoolclass.count) {
              vm.matchScore++;
            }
          }
          if (vm.matchScore < 4) {
            vm.working = false;
            vm.error = 'We could not match the information you have provided';
          } else {
            vm.user.email = schoolclass.email;
            return authService.login(vm.user);
          }
        })
        .then(function() {
          if (vm.error === null) {
            vm.working = false;
            layoutService.setSchoolclass(schoolclass);
            var school = new schoolService.School(schoolclass.school);
            return school.$loaded();
          }
        })
        .then(function(obj) {
          if (vm.error === null) {
            layoutService.setSchool(obj);
            var teacher = new teacherService.Teacher(schoolclass.teacher);
            return teacher.$loaded();
          }
        })
        .then(function(obj) {
          if (vm.error === null) {
            if (vm.player === 'teacher') {
              layoutService.setPlayer(obj, vm.player);
            }
            var student = new studentService.Student(schoolclass.student);
            return student.$loaded();
          }
        })
        .then(function(obj) {
          if (vm.error === null) {
            if (vm.player === 'student') {
              layoutService.setPlayer(obj, vm.player);
            }
            $location.path('/play');
          }
        })
        .catch(function(error) {
          vm.working = false;
          console.log(error);
          vm.error = error;
        });
    }
  }
})();
