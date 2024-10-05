const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const JWT_SECRET = "jayganeshharharmahadevjayshriram";

app.use(express.json());

const users = [];


app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find(u => u.username === username)) {
    res.json({
      message: "You are already Signedup"
    })
    return;
  }

  users.push({
    username: username,
    password: password
  })
  res.json({
    message: "You Are Signed Up"
  })
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // This function takes two arguments 
    // 1. what we want to encode. here it is username
    // 2. the secret key we want to use for encoding
    const token = jwt.sign({
      username: username
    }, JWT_SECRET); // Converting the username over to a jwt

    res.send({
      token: token
    })
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
  console.log(users);
});

app.get("/me", function (req, res) {
  const token = req.headers.token; // JWT

  // This line of code is used to convert the jwt token again to the username for verification.
  const decodedinformation = jwt.verify(token, JWT_SECRET);
  const username = decodedinformation.username
 
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  } else {
    res.status(401).send({
      message: "Unauthorized"
    })
  }
})

app.listen(3000);

// jwt.sign();
// This function is used to take the secret key and encode the username as a JWT token.

// jwt.verify();
// This function is used to take the secret key and decode the JWT to the username again for verification.
