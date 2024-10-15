require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);
app.use(express.json())

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  app.listen(3000, () => {
    console.log("The Server Started On Port No :- 3000 JAY GANESH")
  });
}
main();
