// const person: { name: string; age: number} = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple - fixed array with fixed types  
} = {
  name: "Bellarina",
  age: 56,
  hobbies: ["Sells", "Marketing"],
  role: [2, "author"],
};

let favoriteFoods: string[];
favoriteFoods = ["Cassava", "Beans"];


// Tuple
// person.role.push("Admin") //exception -> push is allowed
// person.role[0] = "Pipe"; //fails
// person[1] = "Pipe"
// person.role = [0, "User", "Biller"] //fails
person.role = [0, "User",] //passes
console.log(person.name);

for (const hoby of person.hobbies) {
  console.log(hoby.toUpperCase());
}
