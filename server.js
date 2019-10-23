import express from 'express';
import { set, connect } from 'mongoose';
import { json, urlencoded } from 'body-parser';
import routes from './api/routes/calculator.routes';

const app = express();
const port = process.env.PORT || 8081;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

set("useNewUrlParser", true);
set("useUnifiedTopology", true);
connect("mongodb://localhost/CalculatorDB");

app.use(urlencoded({ extended: true }));
app.use(json());

routes(app);

app.listen(port);

console.log("Calculator RESTful API server started on: " + port);
