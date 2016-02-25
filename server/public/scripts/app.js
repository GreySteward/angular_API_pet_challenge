var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'Dogs'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'Cats'
        })
        .when('/birds', {
            templateUrl: '/views/templates/birds.html',
            controller: 'Birds'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
