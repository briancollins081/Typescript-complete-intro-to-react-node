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
let y:ElavatedEmployee;
y={name:"", privillages:[""], startDate:new Date()}
const e1: ElavatedEmployee = {
  name: "Eliud",
  privillages: ["create-server"],
  startDate: new Date(),
};

// Union type
type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric; // takes the intersection for union types

let input:Universal;
input = 900; //intersetion is number

