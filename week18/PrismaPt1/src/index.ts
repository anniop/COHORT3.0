import { z } from "zod";
import { config } from "dotenv";
import express from 'express';
import { PrismaClient } from "@prisma/client";
import { bcrypt } from 'bcrypt';
config();

const app = express();
const client = new PrismaClient();

app.post("/signup", async (req, res) => {
  try {
    // Validate request body
    const signupSchema = z.object({
      username: z.string(),
      password: z.string().min(8),
      age: z.number().min(18), // Optional: Validates that the age is a number and at least 18
      city: z.string()
    });

    const validatedData = signupSchema.parse(req.body); // Validate data
    const { username, password, age, city } = validatedData;
    const hashedPassword = bcrypt.hash(password, 10);

    // Create user in the database
    const user = await client.user.create({
      data: {
        username: username,
        password: hashedPassword,
        age: Number(age),
        city: city
      }
    });

    res.json({
      user,
      message: "User Signed Up Successfully"
    });
  } catch (e) {
    // Handle validation or database errors
    res.status(400).json({
      message: "An error occurred",
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await client.user.findMany();
    console.log("Database Connected Successfully")
    res.json({
      users
    })

  } catch (e) {
    console.log(e);
  }
})

app.get("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: Number(id)
    },
    select: {
      todo: true
    }
  });
  res.json({
    users
  })
})

app.listen(3000, () => {
  console.log("Server Started on port 3000");
})
