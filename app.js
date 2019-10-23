import { express } from 'express';
import { mongoose } from 'mongoose';
import { bodyParser } from 'body-parser';
import { routes } from './api/routes/calculator.routes';


const app = express();
const port = process.env.PORT || 8081;

app.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  res.send();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/CalculatorDB");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log("Calculator RESTful API server started on: " + port);
