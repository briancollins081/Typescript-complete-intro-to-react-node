"use strict";
var _a;
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
var fetchedUserData = {
    id: "u1",
    name: "Andere",
    job: { title: "CEO", description: "Lovely head of work!" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = "";
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
//# sourceMappingURL=app.js.map