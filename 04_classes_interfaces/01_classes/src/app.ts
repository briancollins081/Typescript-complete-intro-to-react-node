class Department {
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = []; //make it availabe in child classes

  // Define argument with access modifier to create the param as a property of the class
  constructor(private readonly id: string, public name: string) {
    // this.id = ID;
    // this.name = nm;
  }

  /* describe() {
    console.log("Department: " + this.name);
  } */

  describe(this: Department) {
    //type safety
    console.log("Department: " + " " + this.id + " " + this.name);
  }

  addEmployee(employee: string) {
    // this.id = "900"; //read only can not be modified after intialization - ts feature
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }
  addEmployee(name:string){
    if(name === "ABC"){
      return;
    }
    this.employees.push(name)
  }
  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d_ac_1", "Accounting");
// accounting.addEmployee("Prickter");
// accounting.addEmployee("Loittieffty");
// accounting.employees[4] = "Sidney"; //not possible if it is a private attribute
// console.log(accounting);
// accounting.describe();
// accounting.printEmployeeInformation();
/* const accoutingCopy = { describe: accounting.describe };
accoutingCopy.describe(); */

// const accoutingCopy = { name:"Poo", describe: accounting.describe };
// accoutingCopy.describe();

const it = new ITDepartment("d_it_1", ["Blue", "White", "Red"]);
console.log(it);

const ac = new AccountingDepartment("d-ac_1", []);
console.log(ac);
ac.addReports("What the hell happened here...");
ac.printReports();

ac.addEmployee("Hellen");
ac.addEmployee("ABC");
ac.printEmployeeInformation();
