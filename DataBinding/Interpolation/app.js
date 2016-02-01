//What part of the view is controlled. module name string is looked for in the DOM.
var myApp = angular.module('myApp', []);

// creates a new controller, with the name mainController.
// Model>>View
myApp.controller('mainController', function() {
    
});

/*
Dependency Injection: - Gives a function an object.
Rather than creating and object in a function, you pass it to the function.


var Person = function(firstname, lastname) {
    var m = this;
    m.firstname = firstname;
    m.lastname = lastname;
}

function logPerson()
{
    //Person is dependent on john; bad and difficult to deal with.
    var john = new Person('John','Doe');
    console.log(john);
}

logPerson();

*/

// This is DI... Passing an Object to the function instead...
var Person = function(firstname, lastname) {
    var m = this;
    m.firstname = firstname;
    m.lastname = lastname;
}

function logPerson(person)
{
    console.log(person);
}

var john = new Person('John','Doe');
logPerson(john);

// logPerson is now not dependent on the Person Obj. nor is the logPerson function dependent on person

// Angular uses DI... simple, but it enforces strong stable architecture.
