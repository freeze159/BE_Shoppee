const express = require("express");
const app = express();

const morgan = require("morgan");
const helmet = require("helmet");
const compress = require('compression')
// init middleware
app.use(morgan("dev"));
app.use(helmet())
app.use(compress())
// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome anh em",
  });
});
// handling errors

module.exports = app;
