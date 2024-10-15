/** @format */

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

//.filter(c => c.value === 2)

function filterRange(arr, a, b) {
  return arr.filter((Number) => Number.a && Number <= b);
}

console.log(filterRange(arr, 1, 4));

console.log(filtered);

console.log(arr);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)
