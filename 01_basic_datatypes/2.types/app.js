// UNION TYPES
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(28, 28);
console.log({ combinedAges: combinedAges });
var combinedNames = combine("Alice", "Peter");
console.log({ combinedNames: combinedNames });
