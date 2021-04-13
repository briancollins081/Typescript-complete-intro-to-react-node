"use strict";
const nameGene = "";
let age = 30;
age = 900;
const add = (a, b = 8) => console.log(a + b);
const printOutput = (outputStr) => console.log(outputStr);
const hobbies = ["p", "l"];
const activated = ["r", "k"];
activated.push(...hobbies);
const tea = {
    type: "Asian",
    temperature: "medium",
};
const aTea = Object.assign(Object.assign({}, tea), { type: "African" });
const addMultiple = (...args) => {
    return args.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
};
const addedNumbers = addMultiple(1, 4, 8, 7, 3, 6);
console.log({ addedNumbers });
const bees = ["worker", "queen", "lady-black", "minister"];
const [b1, b2, b3] = bees;
console.log({ b1, b2, b3 });
const ray = {
    lengthOfRay: "infinite",
    height: "light",
    color: "red",
};
const { lengthOfRay, height: h, color } = ray;
console.log({ lengthOfRay, h, color });
//# sourceMappingURL=app.js.map