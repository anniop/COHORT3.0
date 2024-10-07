const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jayganeshjayshriramharharmahadev"

const users = [];

app.use(express.json());

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password
  })

  req.json({
    message: "You Are Signed UP Jay Ganesh"
  });

});

app.post("/signin", function (req, res) {



});

app.get("/me", function (req, res) {


});
app.listen(3000);
