// type AddFn = (a: number, b: number) => number; // also as
interface AddFn {
  (a: number, b: number): number;
}
let addFunction: AddFn;
addFunction = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  readonly name: string;
}
interface Greetable extends Named {
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
