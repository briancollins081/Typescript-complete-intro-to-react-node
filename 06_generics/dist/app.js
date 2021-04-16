"use strict";
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
var newObj1 = mergeObj({ name: "Andere" }, { age: 70 });
console.log(newObj1);
function countAndDescribe(element) {
    var descriptionText = "Got no value!";
    if (element.length === 1) {
        descriptionText = "Got 1 elements!";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements!";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([]));
//# sourceMappingURL=app.js.map