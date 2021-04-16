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

// Key of constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem(index: number) {
    return this.data[index];
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Minio");
textStorage.addItem("Madny");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(900);
numberStorage.addItem(800);
console.log(numberStorage.getItems());
console.log(numberStorage.getItem(0));

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Hillary" });
// objectStorage.addItem({ name: "Jeffry" });
// // objectStorage.removeItem({name:'Jeffry'});
// console.log(objectStorage.getItems());

// Utility Types
// 1.Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// readonly type
const names: Readonly<string[]> = ["Andere", "Jack"];
// names.push("Elie");

// Generic Types vs Union Types
class DataStorage2 {
  private data: (string | number | boolean)[] = []; //accepts any of the types in the union
  addItem(item: string | number | boolean) {
    this.data.push(item);
  }
  removeItem(item: string | number | boolean) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem(index: number) {
    return this.data[index];
  }
  getItems() {
    return [...this.data];
  }
}
