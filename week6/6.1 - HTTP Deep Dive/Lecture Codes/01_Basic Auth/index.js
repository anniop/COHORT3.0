const express = require("express");
const app = express();


app.use(express.json());

const users = [];

//Should Return a random Long string
function generateToken() {

  let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

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
    message: "You Are Signed in"
  })
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    const token = generateToken();
    user.token = token;
    res.send({
      token
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
  const token = req.headers.token;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
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
