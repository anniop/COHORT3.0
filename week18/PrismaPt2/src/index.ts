import express from 'express';
import { config } from 'dotenv';
import { z } from 'zod';
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';
const app = express();
app.use(express.json());
config();
const client = new PrismaClient();

app.post("/signup", async (req, res) => {
  try {
    const userSignSchema = z.object({
      username: z.string(),
      password: z.string().min(8)
    })
    const validData = userSignSchema.parse(req.body);
    const { username, password } = validData

    const hashedPassword = await bcrypt.hash(password, 10);
    await client.user.create({
      data: {
        username: username,
        password: hashedPassword
      },

    })
    res.json({
      message: "SignUp Successfull"
    })
  } catch (e) {
    console.log(e)
    res.json({
      message: "Error While Signing Up"

    })
  }
})

app.post("/singin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    await client.user.findFirst({
      where: {
        username: username,
        password: hashedPassword
      }
    })
    res.json({
      message: "Signin Successfull"
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error Occured"
    })
  }
})

app.post("/todo", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;
    const userId = req.body.userId;

    await client.todo.create({
      data: {
        title: title,
        description: description,
        done: done,
        userId: userId
      }
    })
    res.json({
      message: "Todo Created Successfully"
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error While Creating Todo"
    })
  }
})

app.listen(3000, () => {
  console.log("Server Started At Port 3000");
})
