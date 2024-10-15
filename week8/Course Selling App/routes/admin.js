const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_ADMIN_PASSWORD = "jayganeshharharmahadev"
const { adminModel } = require("../db");

const Router = express.Router;

const adminRouter = Router();

adminRouter.use(express.json());

adminRouter.post("/signup", async function (req, res) {

  const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
  });

  const parsedDataWithSuccess = signUpSchema.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect Format"
    });
    return;
  }

  const { email, password, firstName, lastName } = parsedDataWithSuccess.data;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await adminModel.create({
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

adminRouter.post("/login", async function (req, res) {

  const requireBody = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  });

  const parsedData = requireBody.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      message: "Incorrect Format",
      error: error.message
    });
    return;
  }

  const { email, password } = req.body;

  const user = await adminModel.findOne({
    email: email
  });

  if (!user) {
    res.status(403).json({
      message: "Incorrect Credentials"
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (password) {
    const token = jwt.sign({
      id: user._id
    }, JWT_ADMIN_PASSWORD);
    res.status(200).json({
      token: token
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials"
    });
  }

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
