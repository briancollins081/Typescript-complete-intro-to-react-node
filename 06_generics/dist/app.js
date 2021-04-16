"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
function extractAndConvert(obj, key) {
    return obj[key];
}
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function (index) {
        return this.data[index];
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Minio");
textStorage.addItem("Madny");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(900);
numberStorage.addItem(800);
console.log(numberStorage.getItems());
console.log(numberStorage.getItem(0));
//# sourceMappingURL=app.js.map