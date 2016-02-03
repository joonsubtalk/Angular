var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
    
    $scope.handle = '';
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.clicked = 0;
    
    $scope.alertClick = function(){
        $scope.clicked++;
        console.log($scope.lowercaseHandle());
    }
    
    
    
}]);