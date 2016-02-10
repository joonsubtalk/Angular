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
    // Array of person
    $scope.people = [{
        name: 'Jsub Chung',
        address: '123 four ave, SF, CA 56789'
    },
    {
        name: 'nathan kwok',
        address: '222 faave, OAK, CA 12189'
    },
    {
        name: 'Matt Ng',
        address: '432 bird ave, SSF, CA 12789'
    },
    {
        name: 'girly man',
        address: '23 happpy ave, Irvine, CA 36789'
    }]
    $scope.formattedAddress = function(person){
        return person.name + ', (' + person.address + ')';
    }
}]);

myApp.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams){
  
}]);

//Add a new directive: (name) name will be normalized
// Good to wrap up reuseable elements.
myApp.directive('searchResult', function(){
   // returns a JS Object directive
    return {
        // properties defined
        // A for attribute, E for Element
        // E - <search-result>
        // A - <div search-result>
        
        // C - class <div class="search-result">
        // N - Comment <!-- directive: search-result -->
        restrict: 'AE', // Allows for both AE/EA is default.
        // e.g. main.html // the outputted html
        templateUrl: 'directives/searchresult.html',
        // default = false
        // by having replace true the template will REPLACE <search-result> elemnt
        // false will place the template inside the element.
        replace: true,
        scope: {
            // = : Object "equals" symbolizes 2 way binding into the directive and update passing from the             // outside.
            // fyi: 2 way binding can get muddy
            personObject: "=",
            // @ : text // 1 way binding
            personName: "@",
            personAddress: "@",
            // & this is a function
            formattedAddressFunction: "&"
            
        },
        // element and attributes
        // compile runs once and link runs x times of repeat and each have their own scope.
        // A new model each time, but compile runs only once setting the DOM.
        // Linking functions: allows me to change as each directive as it is created along the way.
        // Compile: creates the whole outer DOM.
        // Link is ran every time a directive is used. (repeated)
        
        // When you have nested directives:
        // Angular compiles directive, then pre links, then asks "are there any directives neseted?" If so, keep going (repeat)
        //    Once Angular finds the end of the chain, it postlinks back up the chain.
        // >> post link is safer than pre link since everything is done and ready.
        // AngularJS: Use Post link plz... Avoid Pre...
        
        // Link is a shorthand for compile with the post object.
        // empty compile returning a post link...
        link: function(scope, elements, attrs){
            console.log('post-link...');

            console.log(scope);

            // you can do something for a particular instance of a directive.
            // NOTE: MUCH better to do ng-if or w/e to determin if class should show...
            if (scope.personObject.name === "Jsub Chung")
                elements.removeAttr('class');

            console.log(elements);

        }
   } 
});