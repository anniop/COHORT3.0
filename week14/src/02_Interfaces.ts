interface Address {
  pincode: number;
  city: string;
  state: string;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

interface Admin {
  name: string;
  age: number;
  address: Address;
}

let user: User = {
  name: "Aniket",
  age: 21,
  address: {
    pincode: 21342,
    city: "Nashik",
    state: "Maha",
  }
}
