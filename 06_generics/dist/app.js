"use strict";
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
var newObj = mergeObj({ name: "Andere" }, { age: 70 });
console.log(newObj);
//# sourceMappingURL=app.js.map