/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthResumeController', AuthResumeController);

  AuthResumeController.$inject = [
    '$location',
    'authService',
    'sessionService',
    'schoolService',
    'studentService',
    'teacherService',
    'schoolclassService',
    'layoutService'
  ];

  function AuthResumeController(
    $location,
    authService,
    sessionService,
    schoolService,
    studentService,
    teacherService,
    schoolclassService,
    layoutService
  ) {
    var vm = this;

    vm.error = null;
    vm.debug = true;

    vm.resume = resume;
    vm.navigate = layoutService.navigate;

    vm.school = schoolService.School();
    vm.schoolclass = schoolclassService.Schoolclass();
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
      var schoolclasses = schoolclassService.getSchoolsByClassname(vm.schoolclass.name);
      var schoolclass = null;
      schoolclasses.$loaded()
        .then(function() {
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
            vm.error = 'We could not match the information you have provided';
          } else {
            vm.user.email = schoolclass.email;
            return authService.login(vm.user);
          }
        })
        .then(function() {
          vm.working = false;
          sessionService.player(vm.player);
          sessionService.schoolclass(schoolclass);
          return schoolService.School(schoolclass.school).$loaded();
        })
        .then(function(obj) {
          sessionService.school(obj);
          return teacherService.Teacher(schoolclass.teacher).$loaded();
        })
        .then(function(obj) {
          sessionService.teacher(obj);
          return studentService.Student(schoolclass.student).$loaded();
        })
        .then(function(obj) {
          sessionService.student(obj);
          $location.path('/play');
        })
        .catch(function(error) {
          vm.working = false;
          console.log(error);
          vm.error = error;
        });
    }
  }

})();
