"use strict";
var y;
y = { name: "", privillages: [""], startDate: new Date() };
var e1 = {
    name: "Eliud",
    privillages: ["create-server"],
    startDate: new Date(),
};
var input;
input = 900;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function addFunc(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result1 = addFunc(9, 10);
var result2 = addFunc("po", "ooh");
var result3 = addFunc("Huh", 10);
var result4 = addFunc(100, "pooh");
//# sourceMappingURL=app.js.map