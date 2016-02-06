# Angular
Understanding Angular

**Interpolation:**
Creating a string by combining strings and placeholders.

eg: 'Hello, ' + name is inerpolated, and results in 'Hello, John'

**Directive:**
An instruction to AngularJS to manipulate a piece of the DOM.

eg: Add a Class, Hide This, Create This, etc.


Normal JS Event Loop --> Angular:[ Watch list {old and new variables in scope } --> Digest Loop ]

*When using **setTimeout**, make sure to use $scope.$apply(function(){ //stuff you want to do });
//Why? Because setTimeout is asynch and does things outside of eventloop and Angular doesn't watch it.

        setTimeout(function(){

            $scope.apply(function(){
                $scope.var = 'newValue';
            });

        }, 200);
        
Of course, if you want to use a setTimeout, you can use: $timeout instead, and not need $scope.apply(function(){});

SPA (Single Page Apps)
Multiple controls, multiple views.

Anchor tags:
#location // This is a fragment identifier

window.addEventListener('hashchange', function(){
    console.log("hash changed!" + window.location.hash);
});

Routing, Templating, and Controllers.
=====================================

