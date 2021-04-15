abstract class Department {
  static fiscalYear: number = 2021;
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = []; //make it availabe in child classes

  // Define argument with access modifier to create the param as a property of the class
  constructor(protected readonly id: string, public name: string) {
    // this.id = ID;
    // this.name = nm;
  }

  /* describe() {
    console.log("Department: " + this.name);
  } */

  /* describe(this: Department) {
    //type safety
    console.log("Department: " + " " + this.id + " " + this.name);
  } */

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "900"; //read only can not be modified after intialization - ts feature
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // Static methods
  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(){
    console.log("IT Department ID: "+this.id);
    
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please provide a valid value for a report!");
    }
    this.addReports(value);
  }
  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "ABC") {
      return;
    }
    this.employees.push(name);
  }
  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(){
    console.log("Accounting Department ID: "+this.id);
    
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

const employee1 = Department.createEmployee("Andere");

console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d_it_1", ["Blue", "White", "Red"]);
// console.log(it);
it.describe();

const ac = new AccountingDepartment("d-ac_1", []);
// console.log(ac.mostRecentReport); // access getter as a value not a method
// console.log(ac);
ac.addReports("What the hell happened here...");
// console.log(ac.mostRecentReport); // access getter as a value not a method

// Using setters
ac.mostRecentReport = "Nano tech failure #56";
// console.log(ac.mostRecentReport);

// ac.printReports();

ac.addEmployee("Hellen");
ac.addEmployee("ABC");
// ac.printEmployeeInformation();
ac.describe();
