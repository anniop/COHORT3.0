const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { adminModel, userModel } = require("../db");

const Router = express.Router;
const { adminModel } = require("../db");

const adminRouter = Router();


adminRouter.post("/signup", async function (req, res) {

  const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
  });

  const parsedDataWithSuccess = signUpSchema.safeParse(req.body);

  if (!parsedDataWithSuccess) {
    res.json({
      message: "Incorrect Format"
    });
    return;
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName
    });

    res.status(201).json({
      message: "You Are Signed in as Admin"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }

});

adminRouter.post("/login", function (req, res) {

});

adminRouter.post("/course", function (req, res) {

});

adminRouter.put("/course", function (req, res) {

});


adminRouter.get("/course/bulk", function (req, res) {

});

module.exports = {
  adminRouter: adminRouter
}
