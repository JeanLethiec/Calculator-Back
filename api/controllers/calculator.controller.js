"use strict";

var mongoose = require("mongoose"),
  Operation = mongoose.model("Operation");

exports.list_operations = function(req, res) {
  Operation.find({}, function(err, operation) {
    if (err) res.send(err);
    res.json(operation);
  });
};

exports.create_operation = function(req, res) {
  var new_operation = new Operation(req.body);
  new_operation.save(function(err, operation) {
    if (err) res.send(err);
    res.json(operation);
  });
};
