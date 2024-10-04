// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
const express = require("express");

const app = express();

function loggerMiddleware(req, res, next) {
  console.log("------------------------------------");
  console.log("Method is : => " + req.method);
  console.log("------------------------------------");
  console.log("Url is i: => " + req.url);
  console.log("------------------------------------");
  console.log("The Date is : => " + new Date());
  console.log("------------------------------------");
  console.log("------------------------------------");
  console.log("Host Name is : => " + req.hostname);
  console.log("------------------------------------");
  next();
}

app.use(loggerMiddleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b
  })
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b
  })

});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b
  })
});

app.listen(3000);
