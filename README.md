# Sample Application: Javascript Pet Store

This is a sample application.

Using great Angular libraries is what you (should) do in your day to day job. This codebase is merely to bring my Angular knowledge to another level. 
Therefore, most of the functionality comes from custom written components: https://github.com/timv2/some-more-angular-components (SMAC)
In SMAC, simple, reusable and maintainable web components are written in Angular 1.4. These components are written in a way that should allow them to be easily upgraded for Angular 2.0.

Due to using fetch API, be aware of browser compatibility: http://caniuse.com/#feat=fetch. My client wasn't to worried about supporting older browsers :-) Let's not do here what we have to do in our day-to-day business.

A deployed version of these sources can be found here: https://javascriptpetstore.herokuapp.com/

Functionality is based on the Java Pet Store (Sun Microsystems)

Technologies used:
* Node / NPM
* Express
* MongoDB
* LoDash
* Socket.IO

* AngularJS 1.4
* JSon
* JQuery TODO remove
* Bootstrap TODO remove
* SASS TODO remove
* Font*Awesome TODO remove

* Angular UI Router TODO replace
* Some more angular components (my own library of angular services, directives, filters)

* Yeoman
* Grunt
* Karma TODO remove
* Jasmine TODO remove
* RequireJS TODO remove
* Bower
* Protractor TODO remove
* Heroku TODO replace by travis

Not used:
* Protractor as this is not the scope of the project. All used components are protractor tested
* Karma as this is not the scope of the project. All used components are unit tested
* anything to enhance the UI as this is not the scope of the project


# Online resources 

- https://github.com/DaftMonk/generator-angular-fullstack/

# Just some developer information

## Build and run this project

    ./mongod
	grunt
    grunt serve
        
## Mongo

    use db petstore
    
    db.pets.find()
