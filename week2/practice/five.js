function UserName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(UserName) {
                resolve("Found !!");
            } else {
                reject("Not Available")
            }
        },4000);
    });
}

function PassWord() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(PassWord) {
                resolve("Right Password !!");
            } else {
                reject("Invaild Password")
            }
        },4000);
    });
}

// Promise Chaning.....

console.log("Fetching UserName.......");
let user = UserName();
user.then((res) => {
    console.log(res);
    console.log("Fetching PassWord...");
    let pass = PassWord();
    pass.then((res) => {
        console.log(res);
    });
});

