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

Angular services are implemented as singletons.
$scope is an exception to this rule; Since it's a child scope to the root scope.
$routes, $logs, etc. are all singletons.
custom singletons share amongst pages are all singletons.


Services are basically factories...

CustomDirectives:

Normalize: To make consistent to a standard.
>> Specifically we are dealing with text normalization, or making strings of text consistent to a standard.
e.g. convert variable names into a consistent different standard==> camelcase.
var this-is-a-cool-variable-name = true; // var thisIsACoolVariableName = true;

custom directives: e.g. customtextinput ==> <customtextinput five-characters-only="true"></customtextinput>

Custom Directives: Compile and Link
-----------------------------------
When building code, the **compiler** converts code to a lower-level language, then the **linker** generates a file the computer will actually interact with.
e.g. Honestly, it's not exactly what AngularJS does... Should have been labeled something else... Just kinda similar...
Probably better to have called it "Initialize" and "onBind"... but w/e

So what does *Compule* and *Link* really do?
Allows you to manipulate directives before they're sent to DOM


You can always nest directives... Yo dawg...
<customDirective>
    <customDirective>
        <customDirective>
            ...
        </customDirective>
    </customDirective>
</customDirective>

Transclusion: Include one document inside another
================================================
e.g. place a copy of one document at a particular point (of another document) inside another
Directives are placeholders... e.g. <directive></directive>
Why does <directive>hello world</directive>, remove "hello world"? because it replaces (rm from DOM) with the actual directive.

So how do I include "hello world?" There's a directive for that... <ng-transclude></ng-transclude> //place whatever inside <directive></directive>to ng-transclude.

