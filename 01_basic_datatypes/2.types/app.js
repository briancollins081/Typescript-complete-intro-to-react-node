/* Functions and Return types */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(no) {
    console.log("result: " + no);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(3400, 899));
var combinedValues;
combinedValues = add;
// combinedValues = 9;
// combinedValues = printResult;
console.log(combinedValues(8, 8));
addAndHandle(5, 70, function (res) {
    console.log(res);
});
