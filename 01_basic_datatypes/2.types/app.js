// const person: { name: string; age: number} = {
var person = {
    name: "Bellarina",
    age: 56,
    hobbies: ["Sells", "Marketing"]
};
var favoriteFoods;
favoriteFoods = ["Cassava", "Beans"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hoby = _a[_i];
    console.log(hoby.toUpperCase());
}
