"use strict";
let user2 = {
    name: "Vaurn",
    age: 21
};
let user = {
    name: "Aniket",
    age: 21,
    address: {
        city: "Nashik",
        country: "India",
        pincode: 422302,
    },
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(user);
if (ans) {
    console.log("I am legal");
}
else {
    console.log("Not legal");
}
