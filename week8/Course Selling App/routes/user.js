const express = require("express");
const { z } = require("zod");
const userModel = require("../db");
const bcrypt = require("bcrypt");
const Router = express.Router;

// const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {

  const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
  });

  const parsedWithSuccess = signUpSchema.safeParse(req.body);

  if (!parsedWithSuccess) {
    res.json({
      message: "Incorrect Format"
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName
    });
    res.json({
      message: "You Are Singned In as a User"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Internal Server Error",
      error: message.error
    });
  }

});

userRouter.post("/login", function (req, res) {
});

userRouter.get("/purchases", function (req, res) {

});


module.exports = {
  userRouter: userRouter
}
