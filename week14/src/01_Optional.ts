interface User {
  name: string;
  age: number;
  address?: {   // THe QuestionMark is for optional field 
    city: string;
    country: string;
    pincode: number;
  };
}

let user2: User = {
  name: "Vaurn",
  age: 21
}

let user: User = {
  name: "Aniket",
  age: 21,
  address: {
    city: "Nashik",
    country: "India",
    pincode: 422302,
  },
};

function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const ans = isLegal(user);
if (ans) {
  console.log("I am legal");
} else {
  console.log("Not legal")
}
