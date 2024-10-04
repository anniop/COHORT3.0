const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  res.json({
    ans: a + b
  })
});

app.get("/substract", function (req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  res.json({
    ans: a - b
  })
});

app.get("/multiply", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;

  res.json({
    ans: a * b
  })
});

app.get("/division", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;

  res.json({
    ans: a / b
  })
});


app.listen(3000);
