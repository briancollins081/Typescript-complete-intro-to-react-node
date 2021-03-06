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

/* 
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

// Descriminated Unions - because the individual classes | interfaces have a common descriptor
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = 0;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: ", speed);
}

moveAnimal({ type: "horse", runningSpeed: 800 });
moveAnimal({ type: "bird", flyingSpeed: 8000 });

// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById("message-output")!;
const userInputElement = document.getElementById(
  "message-output"
)! as HTMLInputElement;
userInputElement.value = "Hi there listener";

// INDEX Properties
interface ErrorContainer {
  //{email:"Not a valid email", username:"Must start with a character" ...other}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  1:"Error",
  email: "Error, email is invalid!",
  username: "Must begin with a character"
}
 */

// Functions overloads
function addFunc(a: number, b: number): number;
function addFunc(a: string, b: string): string;
function addFunc(a: string, b: number): string;
function addFunc(a: number, b: string): string;
function addFunc(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result1 = addFunc(9, 10);
const result2 = addFunc("po", "ooh");
const result3 = addFunc("Huh", 10);
const result4 = addFunc(100, "pooh");

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Andere",
  job: { title: "CEO", description: "Lovely head of work!" },
};

console.log(fetchedUserData?.job?.title);

// Nullish coalescing

// // const userInput = null; //ie from remote
// const userInput = ""; //ie from remote
// const storedData = userInput || "DEFAULT"; // TREATES "" | NULL | UNDEFINED as falsy

// const userInput = null; //ie from remote
const userInput = ""; //ie from remote
const storedData = userInput ?? "DEFAULT"; //  NULL / UNDEFINED only as falsy
