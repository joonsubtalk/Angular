var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
    
    // Create an XMLHttpRequest Object
    var dataRequest = new XMLHttpRequest();
    
    dataRequest.onreadystatechange = function(){
        // $scope.apply() applied due to data change out of angular's scope.
        $scope.apply(function(){
            if (dataRequest.readyState == 4 && dataRequest.status == 200){
                // Assume this data is JSON
                $scope.data = JSON.parse(dataRequest.responseText);
            }
        });
    }
    
    // URL should be whatever the API's link is.
    dataRequest.open("GET", "URL", true);
    dataRequest.send();
    
}]);