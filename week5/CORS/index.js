// This Code to be used when the backend and frontend are hosted on same domain

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });

});


app.listen(3001); 
