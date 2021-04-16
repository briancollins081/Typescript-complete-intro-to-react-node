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
  return function <T extends { new (...args: any[]): { name: string } }>(
    oldConstructor: T
  ) {
    return class extends oldConstructor {
      constructor(..._: any[]) {
        super();
        console.log("WITHTEMPLATE: rendering template");
        const hookElement = document.getElementById(hookId);
        // const p = new oldConstructor();
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.innerText = this.name;
        }
      }
    };
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

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log({ target, name, descriptor });
}

// Methods Decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log({ target, name, descriptor });
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator");
  console.log({ target, name, position });
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price + this._price * tax;
  }
}

// Autobind Decorators
function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message: string = "This works";
  
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);
// achieve the above using decorators
