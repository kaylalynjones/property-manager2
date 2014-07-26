'use strict';
var MongoClient = require('mongodb').MongoClient;
function connection(name, cb){
  var url = 'mongodb://localhost/' + name;
  MongoClient.connect(url, function(err, db){
    global.mongodb = db;
    cb();
  });
}

module.exports = connection;
