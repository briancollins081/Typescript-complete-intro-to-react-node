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
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    if ("privillages" in emp) {
        console.log("Privillages: ", emp.privillages);
    }
    if ("startDate" in emp) {
        console.log("Start Date: ", emp.startDate);
    }
}
printEmployeeInformation(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving Car...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Drving Truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(8000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map