// Built in Generic Types
/* const names: Array<string> = ["P"];

const promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task done!")
    }, 2000);
});
 */

// Custom Generic types

function mergeObj<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// console.log(mergeObj({ name: "Andere" }, { age: 70 }));
const newObj = mergeObj({ name: "Andere" }, { age: 70 });
console.log(newObj);
