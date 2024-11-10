interface Aniket {
  name: string;
  age: number;
}

class Manager implements Aniket {

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

class God extends Manager {
  constructor(name: string, age: number) {
    super(name, age);
  }
}
