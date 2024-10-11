const jwt = require("jsonwebtoken");
const JWT_SECRET = "jayganeshharharmahadevjayshriram";
const express = require("express");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const app = express();

mongoose.connect("mongodb+srv://Anni0p:Anniop12345@cluster0.dh63v.mongodb.net/todo-app");

app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name
  });

  res.json({
    message: "You are signed up"
  })
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password
  });

  console.log(user);

  if (user) {
    const token = jwt.sign({
      id: user._id
    }, JWT_SECRET);
    res.json({
      token: token
    })
  } else {
    res.status(403)({
      message: "Incorrect Credentials"
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done
  });
  res.json({
    message: "Todo Created"
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId
  });
  res.json({
    todos
  })
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect Credentials"
    })
  }
}

app.listen(3000);
