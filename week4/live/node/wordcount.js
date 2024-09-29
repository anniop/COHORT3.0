const fs = require("fs");

function main(fileName) {
    let total = 0;
    fs.readFile(fileName,"utf-8",function(err,data) {
        if(err) {
            console.log("Error File Not Fouund");
        } else {
            for(let i = 0; i < data.length;i++) {
                if(data[i] === " "){
                    total++;
                }
            }
            console.log(total + 1);
        }
    })
}

main("a.txt");