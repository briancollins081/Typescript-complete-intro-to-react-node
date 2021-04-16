// Method 1 Creating a decorator using a function

/* function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
  
}

@Logger
class Person {
  name = "Andere";
  constructor() {
    console.log("Creating person object!");
  }
}

const pers = new Person();
console.log(pers); */

// Method 2 - Decorator factories
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // return function (_: Function) { //_signal unused param
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.innerText = p.name
    }
  };
}

// @Logger("Logging person class")
@WithTemplate("<h1>Person Class Object</h1>", "app")
class Person {
  name = "Andere";
  constructor() {
    console.log("Creating person object!");
  }
}

const pers = new Person();
console.log(pers);
