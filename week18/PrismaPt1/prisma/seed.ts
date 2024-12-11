import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
config();
async function createDummyData() {
  await client.user.create({
    data: {
      username: "Jay Ganesh",
      age: 21,
      password: "123123123",
      city: "Nashik",
      todo: {
        create: {
          title: "go to gym",
          description: "Do chest and triceps",
          done: false
        }
      }
    }
  })
}
createDummyData();
