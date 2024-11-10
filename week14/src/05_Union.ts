interface User {
  name: string,
  age: number
}

interface Admin {
  name: string;
  permissions: string;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
  console.log(user.name);
}

