var express = require("express"),
  app = express(),
  port = process.env.PORT || 8081,
  mongoose = require("mongoose"),
  Operation = require("./api/models/calculator.model"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CalculatorDB");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/calculator.routes");
routes(app);

app.listen(port);

console.log("Calculator RESTful API server started on: " + port);
