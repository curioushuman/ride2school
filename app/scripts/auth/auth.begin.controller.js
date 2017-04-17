/* eslint no-unused-vars: 0 */
/* global angular */
(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthBeginController', AuthBeginController);

  AuthBeginController.$inject = [
    '$location',
    'authService',
    'schoolService',
    'schoolclassService',
    'studentService',
    'teacherService',
    'layoutService',
    'firebaseDataService'
  ];

  function AuthBeginController(
    $location,
    authService,
    schoolService,
    schoolclassService,
    studentService,
    teacherService,
    layoutService,
    firebaseDataService
  ) {
    var vm = this;

    vm.error = null;
    vm.debug = true;

    vm.begin = begin;
    vm.navigate = layoutService.navigate;

    vm.schools = schoolService.getSchools();
    vm.schoolsLoading = true;
    vm.schools.$loaded()
      .then(function(schools) {
        vm.schoolsLoading = false;
      });

    vm.schoolclass = schoolclassService.Schoolclass();
    vm.teacher = teacherService.Teacher();
    vm.student = studentService.Student();
    vm.user = {
      email: '',
      password: ''
    };

    vm.working = false;

    if (vm.debug) {
      authService.logout();
      // vm.schoolclass.school = 'jamescookboyshighschool';
      vm.schoolclass.name = 'Test class';
      // vm.schoolclass.year = 3;
      vm.schoolclass.count = 30;
      vm.teacher.name = 'John brown';
      vm.teacher.codename = 'johnnie';
      vm.student.name = 'Susie';
      vm.student.codename = 'thezue';
      vm.teacher.email = 'john@brown.com';
      vm.user.password = 'johnjohn';
    }

    function begin() {

      vm.working = true;

      // process class
      vm.schoolclass.key = firebaseDataService.createKey();

      // we use a fake email for the logging in
      vm.user.email = vm.schoolclass.key + '@notanactualemail.com';
      // uncertain as to whether or not we need it here.
      vm.schoolclass.email = vm.user.email;

      // process school
      var school = vm.schools.$getRecord(vm.schoolclass.school);
      if (!school.schoolclasses) {
        school.schoolclasses = {};
      }
      school.schoolclasses[vm.schoolclass.key] = true;

      // update the student information
      vm.student.key = firebaseDataService.createKey();
      vm.student.school = school.$id;
      vm.student.schoolclass = vm.schoolclass.key;

      // update teacher information
      vm.teacher.key = firebaseDataService.createKey();
      vm.teacher.school = school.$id;
      vm.teacher.schoolclass = vm.schoolclass.key;

      // relate teacher and student
      vm.student.teacher = vm.teacher.key;
      vm.teacher.student = vm.student.key;

      // update class relevant info
      vm.schoolclass.school = school.$id;
      vm.schoolclass.teacher = vm.teacher.key;
      vm.schoolclass.student = vm.student.key;

      var result = authService.register(vm.user)
        .then(function(authData) {
          vm.schoolclass.uid = authData.uid;
          vm.teacher.uid = authData.uid;
          vm.student.uid = authData.uid;
          return authService.login(vm.user);
        })
        .then(function() {
          return schoolclassService.save(vm.schoolclass);
        })
        .then(function() {
          return teacherService.save(vm.teacher);
        })
        .then(function() {
          return studentService.save(vm.student);
        })
        .then(function() {
          return vm.schools.$save(school);
        })
        .then(function() {
          vm.working = false;
          $location.path('/play');
        })
        // .then(function() {
        //   return authService.sendWelcomeEmail(user.email);
        // })
        .catch(function(error) {
          console.log(error);
          vm.error = error;
          vm.working = false;
        });
    }
  }

})();
