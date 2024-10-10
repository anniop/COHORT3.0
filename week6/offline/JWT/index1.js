const jwt = require("jsonwebtoken");

const value = {
  name: "aniket",
  password: 123123
}

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5pa2V0IiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3Mjg1MzQyMjJ9.8ydRyq_exXlYGQB56QFz_Psz03RZwpMiIjlNYXtK9mg", "secret");


