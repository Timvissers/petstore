# Sample Application: Javascript Pet Store

This is a sample application.

Using great Angular libraries is what you (should) do in your day to day job. This codebase is merely to bring my Angular knowledge to another level. 
Therefore, most of the functionality comes from custom written components: https://github.com/timv2/some-more-angular-components (SMAC)
In SMAC, simple, reusable and maintainable web components are written in Angular 1.4. These components are written in a way that should allow them to be easily upgraded for Angular 2.0.

Due to using fetch API, be aware of browser compatibility: http://caniuse.com/#feat=fetch. My client wasn't to worried about supporting older browsers :-) Let's not do here what we have to do in our day-to-day business.

A deployed version of these sources can be found here: https://javascriptpetstore.herokuapp.com/

Functionality is based on the Java Pet Store (Sun Microsystems)

# Technologies and platforms used

- Node / NPM
- Express
- MongoDB
- LoDash
- Socket.IO

- AngularJS 1.4
- JSon
- JQuery
- Bootstrap
- SASS
- Font-Awesome

- Yeoman
- Grunt
- Karma
- Jasmine
- RequireJS
- Bower
- Protractor
- Heroku

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
