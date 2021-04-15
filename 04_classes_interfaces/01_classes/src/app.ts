interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

/* let user1: Greetable;

user1 = {
  name: "Justine",
  age: 89,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
}; */

let user1: Greetable; // or :Person both work

user1 = new Person("Justine");
// user1.name = "p"; //read only not changeable

user1.greet("Hello there");
