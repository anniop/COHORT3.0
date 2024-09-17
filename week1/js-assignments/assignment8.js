function greet(user){
    if(user.gender == "male"){
        console.log("Hello MR. "+ user.name + " Your age is "+user.age);
    }
    else if(user.gender == "female") {
        console.log("Hello MRS. "+ user.name + " Your age is "+user.age);
    }
    else {
        console.log("Hello others. "+ user.name + " Your age is "+user.age);
    }

    if(user.age < 18) {
        console.log("You are not eligible to vote");
    }
    else {
        console.log("You can vote");
    }

}

let user = {
    name : "Aniket",
    gender : "male",
    age : 21
}

greet(user);