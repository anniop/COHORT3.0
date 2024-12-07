import express from "express";
import { Client } from "pg";
const app = express();

const pgClient = new Client("postgresql://cohortdb_owner:QM3tP9uRyKsv@ep-shy-fire-a5mopp63.us-east-2.aws.neon.tech/cohortdb?sslmode=require");
pgClient.connect();

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `select username,email,password from users where id = $1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `select * from addresses where user_id= $1`;
  const response2 = await pgClient.query(query2, [id]);

  res.json({
    user: response1.rows,
    address: response2.rows
  })
})

//used Joins in it
app.get("/better-metadata", async (req, res) => {
  const id = req.query.id;
  const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = $1;`
  const response = await pgClient.query(query, [id]);


  res.json({
    user: response.rows
  })
})

app.listen(3000, () => {
  console.log("Listining on port 3000");
})
