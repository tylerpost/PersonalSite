//Controller for projects page


angular.module('mySite.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  console.log('proj');
  $routeProvider.when('/projects', {
    templateUrl: 'Projects/projects.html',
    controller: 'projectsCtrl'
  });
}])

.controller('projectsCtrl', [function() {

}]);