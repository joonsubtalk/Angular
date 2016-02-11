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

// Services
weatherApp.service('cityService', function(){
   this.city = "San Francisco, CA"; 
});

//Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    // watch
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;    
}]);

//http://api.openweathermap.org/data/2.5/forecast/daily?APPID=