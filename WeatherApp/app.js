// Module // fyi ngResource allows you to get data from the Internet! :D
// ngResource wraps up http! Easier data grabb'n
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
    .when('/forecast/:days', {
        templateUrl: 'partials/forecast.html',
        controller: 'forecastController'
    })          
                  
});

// Services
weatherApp.service('cityService', function(){
   this.city = "San Francisco, CA"; 
});

//Controllers
weatherApp.controller('homeController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    
    $scope.city = cityService.city;
    
    // watch
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    
    console.log($scope.weatherResult)
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', '$routeParams', function($scope, $resource, cityService, $routeParams){
    $scope.city = cityService.city;   
    
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK"}, { get : {method:"JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({
        APPID: "",
        q: $scope.city,
        cnt: $scope.days
    }); // gets the data and can pass obj for params
    
    $scope.convertKtoF = function(kelvin){
        return Math.round(kelvin * 9/5 - 459.67);  
    };
    
    $scope.convertToReadableDate = function(dt){
        return new Date(dt * 1000);  
    };
}]);

//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=