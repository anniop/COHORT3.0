// Simple Code of MiddleWare

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("request received");
  next();
})

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});

// Modifying The request
app.use(function (req, res, next) {
  req.name = "Jay Ganesh"
  next();
})

app.get("/sum", function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});

//Ending the request/response cycle
app.use(function (req, res, next) {
  res.json({
    message: "You are not allowed"
  })
})

app.get("/sum", function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});

// Calling the next middleware function in the stack.


app.use(function (req, res, next) {
  console.log("request received");
  next();
})

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});
