"use strict";
var Person = (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Justine");
user1.greet("Hello there");
//# sourceMappingURL=app.js.map