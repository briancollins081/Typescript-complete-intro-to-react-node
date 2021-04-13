class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  /* describe() {
    console.log("Department: " + this.name);
  } */

  describe(this:Department) { //type safety
    console.log("Department: " + this.name);
  } 
}

const accounting = new Department("Accounting");

console.log(accounting);

accounting.describe();

/* const accoutingCopy = { describe: accounting.describe };
accoutingCopy.describe(); */

const accoutingCopy = { name:"Poo", describe: accounting.describe };
accoutingCopy.describe();
