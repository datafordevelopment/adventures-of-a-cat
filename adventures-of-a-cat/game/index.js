var Control = require("enyo/Control");
var ready = require("enyo/ready");
var Component = require("enyo/Component");
var utils = require("enyo/utils");

var Multiplayer = require("../multiplayer");

function Game() {
 var control = Control.kind({
  name: "Adventures Of A Cat",
 });

 var server = new Multiplayer.Server();
 enyo.kind({
  name: "flickr.MainView",
  classes: "moon enyo-fit",
  components: [
            {kind: "moon.Panels", classes: "enyo-fit", pattern: "alwaysviewing", popOnBack: true, components: [
                {kind: "moon.Panel", title: "First Panel"}
            ]}
        ]
    });
}

module.exports = Game;
