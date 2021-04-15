// Object Type
type Admin = { name: string; privillages: string[] };

/* interface Admin {
  name: string;
  privillages: string[];
} */

type Employee = { name: string; startDate: Date };

/* interface Employee {
  name: string;
  startDate: Date;
}
 */
type ElavatedEmployee = Admin & Employee; // takes all unique properties of the two

// interface ElavatedEmployee extends Employee, Admin {}
let y: ElavatedEmployee;
y = { name: "", privillages: [""], startDate: new Date() };
const e1: ElavatedEmployee = {
  name: "Eliud",
  privillages: ["create-server"],
  startDate: new Date(),
};

// Union type
type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric; // takes the intersection for union types

let input: Universal;
input = 900; //intersetion is number

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  if ("privillages" in emp) {
    console.log("Privillages: ", emp.privillages);
  }
  if ("startDate" in emp) {
    console.log("Start Date: ", emp.startDate);
  }
}

printEmployeeInformation(e1);

// Type guards on classes
class Car {
  drive() {
    console.log("Driving Car...");
  }
}

class Truck {
  drive() {
    console.log("Drving Truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo " + amount);
  }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(8000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(8000);
  }
}

useVehicle(v1);
useVehicle(v2);
