/** @format */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// let names = cart.map((x) => x.name), The map() method returns a new array (names) containing the names of all users.

let names = users.map((userNames) => userNames.name);
console.log(names);
