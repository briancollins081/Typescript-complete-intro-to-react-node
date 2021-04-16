"use strict";
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
var newObj1 = mergeObj({ name: "Andere" }, { age: 70 });
console.log(newObj1);
//# sourceMappingURL=app.js.map