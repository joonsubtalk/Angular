var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
    
    $scope.handle = '';
                                    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    //More Directives
    $scope.characters = 5; // limit to 5
    
    $scope.rules = [
        
        { rulename: "Must be 5 characters"},
        { rulename: "Must not be used elsewhere"},
        { rulename: "Must be cool"}
        
    ]
}]);