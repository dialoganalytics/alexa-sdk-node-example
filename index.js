'use strict';

var Alexa = require('alexa-sdk');

var handlers = {
  'LaunchRequest': function() {
    this.emit('SayHello');
  },
  'HelloWorldIntent': function(intent, session, response) {
    this.emit('SayHello');
  },
  'SayHello': function() {
    this.emit(':tell', 'Hello World!');
  }
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
