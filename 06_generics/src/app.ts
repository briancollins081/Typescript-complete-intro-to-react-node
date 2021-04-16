// Built in Generic Types
/* const names: Array<string> = ["P"];

const promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task done!")
    }, 2000);
});
 */

// Custom Generic types

function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// console.log(mergeObj({ name: "Andere" }, { age: 70 }));
const newObj1 = mergeObj({ name: "Andere" }, { age: 70 });
// const newObj2 = mergeObj({ name: "Andere" }, 50); // after adding extends it throws
console.log(newObj1);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value!";
  if (element.length === 1) {
    descriptionText = "Got 1 elements!";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements!";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([]));
