import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ContentModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config"
import { userMiddleware } from "./middleware";
const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  //zod viladition, hashing the password
  const username = req.body.username;
  const password = req.body.password;
  try {
    await UserModel.create({
      username: username,
      password: password
    })
    res.json({
      message: "User Signed Up"
    })
  } catch (error) {
    res.status(411).json({
      message: "User Already Exists"
    })
  }

})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
    password
  });

  if (existingUser) {
    const token = jwt.sign({
      id: existingUser._id
    }, JWT_PASSWORD)
    res.json({
      token
    })
  } else {
    res.status(403).json({
      message: "Incorrect Credentials"
    })
  }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;

  await ContentModel.create({
    link,
    type,
    //@ts-ignore
    userId: req.userId,
    tags: []
  })

  res.json({
    message: "Content Added"
  })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId
  }).populate("userId", "username")
  res.json({
    content
  })
})

app.delete("/api/v1/content", async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId
  })
  res.json({
    message: "Deleted"
  })
})

app.post("/api/v1/brain/content/share", (req, res) => {

})

app.post("/api/v1/brain/brain/shareLink", (req, res) => {

})
app.listen(5000);
