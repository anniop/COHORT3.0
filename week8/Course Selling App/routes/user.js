const express = require("express");
const { z } = require("zod");
const { userModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "jayganeshjayshriram"
const Router = express.Router;


// const { Router } = require("express");

const userRouter = Router();
userRouter.use(express.json());

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
  const { email, password, firstName, lastName } = parsedWithSuccess.data;
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
      error: error.message
    });
  }

});

userRouter.post("/login", async function (req, res) {

  const requireBody = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "Incorrect data format",
      error: parseDataWithSuccess.error,
    });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    return res.status(403).json({
      message: "Incorrect Credentials!",
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials!",
    });
  }
});

userRouter.get("/purchases", function (req, res) {

});


module.exports = {
  userRouter: userRouter
}
