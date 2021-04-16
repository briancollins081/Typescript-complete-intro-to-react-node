"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("WITH TEMPLATE FACTORY");
    return function (oldConstructor) {
        return class extends oldConstructor {
            constructor(..._) {
                super();
                console.log("WITHTEMPLATE: rendering template");
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector("h1").innerText = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Andere";
        console.log("Creating person object!");
    }
};
Person = __decorate([
    Logger("LOGGER: Logging person class"),
    WithTemplate("<h1>Person Class Object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log("Property decorators!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log({ target, name, descriptor });
}
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log({ target, name, descriptor });
}
function Log4(target, name, position) {
    console.log("Parameter decorator");
    console.log({ target, name, position });
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - use a positive number");
        }
    }
    getPriceWithTax(tax) {
        return this._price + this._price * tax;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map