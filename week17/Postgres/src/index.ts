import { Client } from "pg";
import express from "express";
const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://cohortdb_owner:QM3tP9uRyKsv@ep-shy-fire-a5mopp63.us-east-2.aws.neon.tech/cohortdb?sslmode=require");
pgClient.connect();

app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
    const values = [username, email, password];
    await pgClient.query(insertQuery, values);
    res.json({
      message: "User Signed Up"
    })
  } catch (e) {
    console.log(e)
    res.json({
      message: "error while signing up"
    })
  }
});


app.listen(3000, () => {
  console.log("server started at port 3000");
})

