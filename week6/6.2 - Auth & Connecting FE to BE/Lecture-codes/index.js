const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jayganeshjayshriramharharmahadev";
const app = express();

app.use(express.json());
const users = [];

function auth(req, res, next) {

  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not Logged In"
    })
  }
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are Signed Up"
  })
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }
  if (!foundUser) {
    res.json({
      message: "Incorrect Credentials"
    })
  } else {
    const token = jwt.sign({
      username
    }, JWT_SECRET);
    res.json({
      token: token
    })
  }
});

function logger(req, res, next) {
  console.log(req.method + " request Came");
  next();
}

app.get("/me", logger, auth, function (req, res) {
  const token = req.headers.token;

  const decodeData = jwt.verify(token, JWT_SECRET);

  if (decodeData.username) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === req.username) {
        foundUser = users[i];
      }
    }
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  }

});

app.listen(3000);
