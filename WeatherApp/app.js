// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routing
// inject routeProvider to function
weatherApp.config(function($routeProvider){
                  
    $routeProvider
    
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'partials/forecast.html',
        controller: 'forecastController'
    })          
                  
});

//Controllers
weatherApp.controller('homeController', ['$scope', function($scope){
    
}]);

weatherApp.controller('forecastController', ['$scope', function($scope){
    
}]);