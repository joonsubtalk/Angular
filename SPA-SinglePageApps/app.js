var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){
    $scope.greet = "hello!";
}]);

// This $scope is a new instance of the $scope object. Has nothing to do with mainController.
myApp.controller('secondController', ['$scope', function($scope){
    $scope.greet = "aloha!";     
}]);