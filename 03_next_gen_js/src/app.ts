const nameGene = "";
// nameGene="099"
let age = 30;
age = 900;

// let - covers both function global and block scopes
// var - only works for function scopes & global scopes

const add = (a: number, b: number = 8) => console.log(a + b);
const printOutput: (a: number | string) => void = (outputStr) =>
  console.log(outputStr);
// console.log(add(8));
// console.log(add(8, 10));

// Spread ops
const hobbies = ["p", "l"];
const activated = ["r", "k"];
activated.push(...hobbies);

const tea = {
  type: "Asian",
  temperature: "medium",
};

const aTea = { ...tea, type: "African" };

// console.log({ hobbies, tea, aTea });

// Rest Params

const addMultiple = (...args: number[]) => {
  return args.reduce(
    (currentResult, currentValue) => currentResult + currentValue,
    0
  );
};

const addedNumbers = addMultiple(1, 4, 8, 7, 3, 6);
console.log({ addedNumbers });

// Destructuring
const bees = ["worker", "queen", "lady-black", "minister"];
const [b1, b2, b3] = bees;

console.log({ b1, b2, b3 });

const ray = {
  lengthOfRay: "infinite",
  height: "light",
  color: "red",
};

const { lengthOfRay, height:h, color } = ray;

console.log({ lengthOfRay, h, color });
