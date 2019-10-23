"use strict";
module.exports = function(app) {
  var controller = require("../controllers/calculator.controller");

  app
    .route("/operation")
    .get(controller.list_operations)
    .post(controller.create_operation);
};
