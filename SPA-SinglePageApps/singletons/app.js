// tell Angular, I'm gonna use "routing" service
var myApp = angular.module('myApp', ['ngRoute']);

//avail thru routing...
myApp.config(function($routeProvider) {

    $routeProvider
             
    .when('/', {
         templateUrl: 'pages/main.html', // [physical location]
         controller: 'mainController'
    })
    // for cases when no num variable is set
    .when('/second/', {                   // route this to...
         templateUrl: 'pages/second.html', // [physical location]
         controller: 'secondController'    // connect and bind it to this controller.
    })
    // : is for patter matching eg. adding params
    .when('/second/:num', {                   // route this to...
         templateUrl: 'pages/second.html', // [physical location]
         controller: 'secondController'    // connect and bind it to this controller.
    })
             
             
});

myApp.service('nameService', function() {
    
    var m = this;
    
    m.name = 'jsub chung';
    
    m.nameLength = function(){
        // common js stuff... this keyword refers to the current function's scope, 
        // we want to call the outer function lexically so we use m.
        return m.name.length;
    }
    
});

// let's use this new service we created...
myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
    $scope.name = "main";
    $log.log(nameService.name);
    $log.info(nameService.nameLength());
}]);

myApp.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = "second";    
    $scope.num = $routeParams.num || 0; // defaults to 0, just in case num is not set.
}]);