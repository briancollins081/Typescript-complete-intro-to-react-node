// UNION TYPES
// function combine(n1: number | string, n2: number | string, resultType: string) {
// types aliases
type Combinable = number | string;
type ConversionDesriptor = "as-number" | "as-text"; //custom type aliases

function combine(
  n1: Combinable // or number | string,
  n2: Combinable,
  resultType: ConversionDesriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result;
  //   }
}

const combinedAges = combine(28, 28, "as-number");
console.log({ combinedAges });

const combinedStrings = combine("280", "100", "as-number");
console.log({ combinedStrings });

const combinedNames = combine("Alice", "Peter", "as-text");
console.log({ combinedNames });
