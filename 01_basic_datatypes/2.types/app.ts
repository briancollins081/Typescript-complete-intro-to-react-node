/* Functions and Return types */
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(no: number): void {
  console.log("result: " + no);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(3400, 899));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = 9;
// combinedValues = printResult;

console.log(combinedValues(8, 8));

addAndHandle(5, 70, (res) => {
  console.log(res);
});
