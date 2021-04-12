// const person: { name: string; age: number} = {
/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple - fixed array with fixed types  
} = {
  name: "Bellarina",
  age: 56,
  hobbies: ["Sells", "Marketing"],
  role: [2, "author"],
}; */

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

enum Role {
  ADMIN = 1,
  READ_ONLY = "RO",
  AUTHOR = 2,
}
// Enums
const person = {
  name: "Bellarina",
  age: 56,
  hobbies: ["Sells", "Marketing"],
  role: Role.AUTHOR,
};

// Arrays
// let favoriteFoods: string[];
// favoriteFoods = ["Cassava", "Beans"];

// Any type
var favoriteFoods:any; // also any[] for array
favoriteFoods = ["Cassava", "Beans"];
favoriteFoods = "Pineaple";
// Tuple
// person.role.push("Admin") //exception -> push is allowed
// person.role[0] = "Pipe"; //fails
// person[1] = "Pipe"
// person.role = [0, "User", "Biller"] //fails
// person.role = [0, "User"]; //passes
console.log(person.name);

for (const hoby of person.hobbies) {
  console.log(hoby.toUpperCase());
}


// enum tests
if(person.role === Role.AUTHOR){
  console.log("is author");
  
}