const express = require("express");
const app = express();
require("dotenv").config();

const morgan = require("morgan");
const helmet = require("helmet");
const compress = require("compression");
// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compress());
// init db
require("./dbs/init.mongodb");

// const { checkOverload, countConnect } = require("./helpers/check.connect");
// checkOverload()
// init routes
app.use("/", require("./routes/index"));
// handling errors

module.exports = app;
