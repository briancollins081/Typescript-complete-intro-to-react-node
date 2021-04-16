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
