import express from "express";
import { Client } from "pg";
const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://cohortdb_owner:QM3tP9uRyKsv@ep-shy-fire-a5mopp63.us-east-2.aws.neon.tech/cohortdb?sslmode=require");
pgClient.connect();


app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {

    await pgClient.query('BEGIN'); // starting a transaction
    const userQuery = `insert into users(email, username, password) values($1,$2,$3) RETURNING id`;
    const userValues = [username, email, password];
    const response = await pgClient.query(userQuery, userValues);
    const userId = response.rows[0].id;

    const addressQuery = `insert into addresses(city, country,street,pincode, user_id) values ($1,$2,$3,$4,$5)`;
    const addressValues = [city, country, street, pincode, userId];
    await pgClient.query(addressQuery, addressValues);
    await pgClient.query('COMMIT'); // transaction completed

    console.log("Transaction done SuccessFully");

    res.json({
      message: "Signin SuccessFull"
    })

  } catch (e) {
    console.log(e);
    res.json({
      message: "Error While Singup"
    })
  }
})

app.listen(3000, () => {
  console.log("Listining on port 3000")
})
