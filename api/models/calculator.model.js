"use strict";
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let OperationSchema = new Schema({
  value: {
    type: String,
    validate: [
      {
        validator: function(v) {
          v = v.replace(/\s+/g, "");
          if (!isNormalInteger(v.split("=")[1])) {
            // If it's not an integer, we don't bother checking if it's odd.
            return true;
          }
          return v.split("=")[1] % 2 === 0;
        },
        message: props => `${props.value} is odd.`
      },
      {
        validator: function(v) {
          v = v.replace(/\s+/g, "");
          return !isNormalInteger(v.split("=")[1]);
        },
        message: props => `${props.value} is integer.`
      }
    ],
    required: "Operation value is mandatory."
  }
});

function isNormalInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}

module.exports = mongoose.model("Operation", OperationSchema);
