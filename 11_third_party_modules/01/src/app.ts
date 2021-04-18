//1. USING VANILLA JS BASED LIBS

/* import _ from "lodash";
declare var GLOBAL: any;
// Installed lodash types to use it in ts
console.log(_.shuffle([1, 8, 20]));

// libs or code without types i.e.
console.log(GLOBAL); */

// 2. USING TYPESCRIPT BASED LIBS THAT WORK BOTH IN VANILLA JS AND TYPESCRIPT
/* import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { Product } from "./product.model";
const products = [
  { title: "A Carpet", price: 23.5 },
  { title: "A Keyholder", price: 10.49 },
];
// const loadedProducts = products.map((p) => new Product(p.title, p.price));
const loadedProducts = plainToClass(Product, products);
// const p1 = new Product("A book", 33.59);
loadedProducts.forEach((p) => {
  console.log(p.getInformation());
}); */

// 3. USING TYPESCRIPT ONLY LIBS
import { validate } from "class-validator";
import { Product } from "./product.model";

const newP = new Product("", -19.5);
validate(newP).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else {
    console.log(newP);
  }
});
