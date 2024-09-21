const { log } = require("console");

function sum(n) {
    let ans = 0;
    for(let i = 0;i<= n;i++)
    {
        ans = i + ans;
    }
    return ans;
}

let result = sum(5);
log(result);
