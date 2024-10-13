const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jayganeshharharmahadevjayshriram";
const express = require("express");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const app = express();
const { z } = require("zod")

mongoose.connect("mongodb+srv://Anni0p:Anniop12345@cluster0.dh63v.mongodb.net/todo-app");

app.use(express.json());

app.post("/signup", async function (req, res) {

  const requiredBody = z.object({
    email: z.string(),
    name: z.string,
    password: z.string()
  });

  // const parsedData = requiredBody.parse(req.body);
  const parsedDataWithSuccess = requiredBody.safeparse(req.body);

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log(hashedPassword);

  await UserModel.create({
    email: email,
    password: hashedPassword,
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
    email: email
  });

  if (!user) {
    res.status(403).json({
      message: "User Does Not Exist"
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);


  if (passwordMatch) {
    const token = jwt.sign({
      id: user._id
    }, JWT_SECRET);
    res.json({
      token: token
    })
  } else {
    res.status(403).json({
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
