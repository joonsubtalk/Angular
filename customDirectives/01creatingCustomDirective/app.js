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
myApp.controller('mainController', ['$scope', '$log', function($scope, $log){

}]);

myApp.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams){
  
}]);

//Add a new directive: (name) name will be normalized
// Good to wrap up reuseable elements.
myApp.directive('searchResult', function(){
   // returns a JS Object directive
    return {
       // properties defined
        // e.g. main.html // the outputted html
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 main st., San Francisco, CA 93201</p></a>',
        // default = false
        // by having replace true the template will REPLACE <search-result> elemnt
        // false will place the template inside the element.
        replace: true
   } 
});