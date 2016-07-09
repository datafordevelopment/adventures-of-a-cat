var Control = require("enyo/Control");
var ready = require("enyo/ready");
var Component = require("enyo/Component");
var utils = require("enyo/utils");

var Game = require("./game");

ready(function() {
 new Game().renderInto(document.body);
});
