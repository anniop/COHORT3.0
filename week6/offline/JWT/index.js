const jwt = require("jsonwebtoken");

const value = {
  name: "aniket",
  accountNumber: 123123
}

const token = jwt.sign(value, "secret");
console.log(token);
