//Main controller including page routing


angular.module('mySite', [
  'ngRoute',
  'mySite.projects',
  'mySite.resume'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
  console.log("PLS");
}]);