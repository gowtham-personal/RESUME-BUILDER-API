const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const PORT = 5000;
const logger = require("morgan");

let app = express();

var indexRouter = require("./src/routes/index");
var usersRouter = require("./src/routes/users");

// Simple logger
app.use(
  logger("combined", {
    stream: fs.createWriteStream("./express.log", { flags: "a" })
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Express currently running on port ${PORT}`)
);

module.exports = app;
