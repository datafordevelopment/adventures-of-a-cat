var http = require("http");
var net = require("net");
var https = require("https");
var fs = require("fs");

function Server() {
 var server = net.createServer(function(socket) {
  console.log(socket);
  socket.pipe(socket);
 });

 this.open = function() {
  server.listen(1337,"127.0.0.1");
 };
}

module.exports = Server;
