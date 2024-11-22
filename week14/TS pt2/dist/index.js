"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Aniket", age: 21 }, { name: "Somu", age: 21 });
console.log(age);
