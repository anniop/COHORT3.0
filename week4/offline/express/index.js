// Creating a HTTP server
// Using Express
// Node Default library => NO (npm install express)

const express = require("express");

const app = express();

function calculateSum(n) {
    let sum = 0;
    for(let i = 0;i <= n ; i++){
        sum = sum + i;
    }
    return sum;
}
//req, res => request, response
app.get("/", function(req, res){
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send("Hii Your answer is "+sum);
})

app.listen(3000);