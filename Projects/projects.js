//Controller for projects page


angular.module('mySite.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'Projects/projects.html',
    controller: 'projectsCtrl'
  });
}])

.controller('projectsCtrl', [function() {
	
}]);