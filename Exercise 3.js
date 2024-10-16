/** @format */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let users = [john, pete, mary];

// we have to create a function getAverageAge (users)
// that takes an array of objects as an argument
// and returns the average age of the users in the array

function getAverageAge(users) {
  //.map() is used to create another array.
  let ages = users.map((user) => user.age);
  // .reduce() is used to add up all the ages in the array.
  let sum = ages.reduce((a, b) => a + b, 0);
  // .length is used to get the number of users in the array.
  let average = sum / ages.length;
  return average;
}
console.log(getAverageAge(users));
