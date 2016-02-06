// tell Angular, I'm gonna use "routing" service
var myApp = angular.module('myApp', ['routing']);

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){
    $log.info($location.path());
}]);