const express = require('express');
const bodyParser = require ("body-parser");
const cors = require('cors');
const { routes } = require("./routes");


const originBoiler = {
  origin: function (origin, callback) {
    callback(null, true)
  }
};

const app = express();
app.use(cors(originBoiler));
app.use(bodyParser.json());

routes(app);

exports.app = app;
