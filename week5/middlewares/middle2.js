const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log(`Total number of requests are ${requestCount}`);
  if (req === null) {
    res.json({
      message: "I ended the request early",
    });
  } else {
    next();
  }
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

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(3000);
