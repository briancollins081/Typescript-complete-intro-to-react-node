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
  console.log("LOGGER FACTORY");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("WITH TEMPLATE FACTORY");

  // return function (_: Function) { //_signal unused param
  return function (constructor: any) {
    console.log("WITHTEMPLATE: rendering template");

    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.innerText = p.name;
    }
  };
}

@Logger("LOGGER: Logging person class")
@WithTemplate("<h1>Person Class Object</h1>", "app")
class Person {
  name = "Andere";
  constructor() {
    console.log("Creating person object!");
  }
}

const pers = new Person();
console.log(pers);

// Property Decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorators!");
  console.log(target, propertyName);
}
class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - use a positive number");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price + this._price * tax;
  }
}
