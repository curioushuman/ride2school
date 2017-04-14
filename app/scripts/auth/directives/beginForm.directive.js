(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('gzBeginForm', gzBeginForm);

  function gzBeginForm() {
    return {
      templateUrl: 'app/directives/auth/beginForm.template.html',
      restrict: 'E',
      controller: BeginFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '=',
        submitAction: '&'
      }
    };
  }

  function BeginFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    };
  }

})();
