const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log(`Total number of requests are ${requestCount}`);
  next();
}

function realSumHandler(req, res) {
  console.log("Control Reached to real handler");
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  console.log(req.name);

  res.json({
    ans: a + b,
  });
}

function realMultiplyHandler(req, res) {
  console.log("In the realMultiplyHandler");
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a * b,
  })
}

app.use(requestIncreaser);

app.get("/sum", realSumHandler);

app.get("/multiply", realMultiplyHandler);

app.get("/admin", function (req, res) {
  res.json({
    message: `Total Number of Requests on the server are ${requestCount}`
  })
})

app.listen(3000);
