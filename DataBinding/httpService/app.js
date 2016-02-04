var myApp = angular.module('myApp', []);

// Let's inject the dependency $http service obj
myApp.controller('mainController', ['$scope', '$filter', '$http', 
                                    function($scope, $filter, $http){
    
    $scope.artistName = '';
    
    $scope.artistNameLowercase = function(){
        return $filter('lowercase')($scope.artistName);
    }
    
    $scope.characterLimit = 5;
    
    $scope.findArtist = function(){
        $scope.songs = '';
         $http.get('https://itunes.apple.com/search?term='+$scope.artistName)
            .success(function(result){
                $scope.songs = result.results;
                console.log($scope.songs);
            })
            .error(function(data, status){
                console.log(data);
            });
    }                                    
                                        
}]);