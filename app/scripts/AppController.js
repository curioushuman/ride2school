/* eslint require-jsdoc: 0 */
// Currently not included as I am getting an uglify error that doesn't tell
// me anything!!
function AppController($scope, $mdSidenav) {
  $scope.toggleMenu = function() {
    $mdSidenav('left').toggle();
  };
}

export default ['$scope', '$mdSidenav', AppController];
