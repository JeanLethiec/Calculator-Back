"use strict";

import { Schema, model } from "mongoose";

const OperationSchema = new Schema({
  value: {
    type: String,
    validate: [
      {
        validator: function (v) {
          v = v.replace(/\s+/g, "");
          if (!Number.isInteger(v.split("=")[1])) {
            // If it's not an integer, we don't bother checking if it's odd.
            return true;
          }
          return v.split("=")[1] % 2 === 0;
        },
        message: props => `${props.value} is odd.`
      },
      {
        validator: function (v) {
          v = v.replace(/\s+/g, "");
          return !Number.isInteger((v.split("=")[1]));
        },
        message: props => `${props.value} is integer.`
      }
    ],
    required: "Operation value is mandatory."
  }
});

export default model("Operation", OperationSchema);
