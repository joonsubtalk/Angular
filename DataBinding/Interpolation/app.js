var myApp = angular.module('myApp', []);

// Inject services: scope and timeout
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
    
    $scope.name = 'John';
    
    $timeout(function(){
        $scope.name = 'Someone?';
    }, 3000);
    
}]);