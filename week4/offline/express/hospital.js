const express = require("express");
const app = express();
var user = [{
    name :"Aniket",
    kidneys : [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const aniketkidneys = user[0].kidneys;
    const numberOfKidneys = aniketkidneys.length;
    let numberOfhealthyKidneys = 0;
    for(let i = 0;i<aniketkidneys.length;i++){
        if(aniketkidneys[i].healthy) {
        numberOfhealthyKidneys = numberOfhealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfhealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    
    // Count the number of healthy kidneys
    const healthyKidneys = user[0].kidneys.filter(kidney => kidney.healthy >= 2).length;
    
    if(healthyKidneys < 2) {
        // If the user has less than 2 healthy kidneys, add the new one
        user[0].kidneys.push({
            healthy: isHealthy
        });
        res.json({
            msg: "Done!!"
        });
    } else {
        // If the user already has 2 healthy kidneys, respond with an error message
        res.status(411).json({
            msg: "You have Enough Healthy Kidneys"
        });
    }
});


app.put("/", function(req,res) {
    for(let i = 0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);
