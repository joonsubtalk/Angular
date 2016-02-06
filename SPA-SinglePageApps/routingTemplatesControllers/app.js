// tell Angular, I'm gonna use "routing" service
var myApp = angular.module('myApp', ['ngRoute']);

//avail thru routing...
myApp.config(function($routeProvider) {

    $routeProvider
             
    .when('/', {
         templateUrl: 'pages/main.html', // [physical location]
         controller: 'mainController'
    })
    .when('/second', {                   // route this to...
         templateUrl: 'pages/second.html', // [physical location]
         controller: 'secondController'    // connect and bind it to this controller.
    })
             
             
});

myApp.controller('mainController', ['$scope', function($scope){
    
}]);

myApp.controller('secondController', ['$scope', function($scope){
    
}]);