var os = require("os");
var fs = require("fs");

var path = os.homedir() + "/.adventuresOfaCat/";

try {
 var stats = fs.lstatSync(path);
 if(!stats.isDirectory()) {
  fs.mkdir(path,function() {});
  fs.mkdir(path + "config/",function() {});
  var configObj = {
  };
  var config = JSON.stringify(configObj);
  fs.writeFile(path + "config/User.json",config,(err) => {
   if(err) throw err;
  });
 }
} catch(e) {
 console.log(e);
}
