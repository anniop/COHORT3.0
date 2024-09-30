const express = require("express")
const app = express();

// Function that return boolean if the age of the person is more than 14
function isOld(age) {
    if(age >=14) {
        return true;
    } else {
        return false;
    }
}

function isOldMiddleWare(req, res, next){
    const age = req.query.age; 
    if(age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry You are not old enough"
        })
    }
}

// app.use(isOldMiddleWare); this is also be used instead of individually call it in every function.

app.get("/ride1", isOldMiddleWare ,function(req, res){
    res.json({
        msg: "Jay Ganesh from ride 1"
    })
})

app.get("/ride2", isOldMiddleWare ,function(req, res){
    res.json({
        msg: "Jay Ganesh from ride 2"
    });
});

app.listen(3000);