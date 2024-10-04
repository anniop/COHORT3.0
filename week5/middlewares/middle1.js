const express = require("express");
const app = express();

let requestCounter = 0;

function requestIncreaser(req, res, next) {
  requestCounter = requestCounter + 1;
  req.name = "Jay Ganesh";
  console.log(`Number of requests on the server are ${requestCounter}`);
  next();
}

function realsum(req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  console.log(req.name);
  res.json({
    ans: a + b
  })
}

function realmultiply(req, res) {
  let a = req.query.a;
  let b = req.query.b;
  console.log(req.name);
  res.json({
    ans: a * b
  })
}

app.get("/add", requestIncreaser, realsum);

app.get("/multiply", requestIncreaser, realmultiply);

app.listen(3000);
