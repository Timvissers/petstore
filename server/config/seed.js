/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Pet = require('../api/pet/pet.model');


Pet.find({}).remove(function() {
    Pet.create({
    name : 'White donkey',
    info : 'Eats like a buffalo'
  }, {
    name : 'Gorilla',
    info : 'Ideally for in the garage'
  }, {
    name : 'Blue bird',
    info : 'It\'s actually a magpie'
  },  {
    name : 'Not so dangerous python',
    info : '6 feet long'
  },  {
    name : 'Secondhand squirrel',
    info : 'Needs to be sold quickly'
  },{
    name : 'Common alien',
    info : 'Collector\'s item'
  });
});