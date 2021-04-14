class Department {
  name: string;
  private employees:string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  /* describe() {
    console.log("Department: " + this.name);
  } */

  describe(this:Department) { //type safety
    console.log("Department: " + this.name);
  } 

  addEmployee(employee:string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
    
    
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Prickter");
accounting.addEmployee("Loittieffty");
// accounting.employees[4] = "Sidney"; //not possible if it is a private attribute
// console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

/* const accoutingCopy = { describe: accounting.describe };
accoutingCopy.describe(); */

// const accoutingCopy = { name:"Poo", describe: accounting.describe };
// accoutingCopy.describe();
