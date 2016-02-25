var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'Dogs'
        })
        .when('/another', {
            templateUrl: '/views/templates/cats.html',
            controller: 'Cats'
        })
        .when('/three', {
            templateUrl: '/views/templates/birds.html',
            controller: 'Birds'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
