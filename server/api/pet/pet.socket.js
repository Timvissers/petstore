/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var pet = require('./pet.model');

exports.register = function(socket) {
  pet.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  pet.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pet:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pet:remove', doc);
}