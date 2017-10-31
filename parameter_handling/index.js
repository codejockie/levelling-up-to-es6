// default parameters
function buy(item, amount = 1) {
  return;
}

buy("eggs");

// rest operator
function print(age, siblings, ...array) { // Note: the rest operator must be the last argument
  // var array = Array.prototype.slice.apply(arguments);

  console.log(age); // 1
  console.log(siblings); // 2
  console.log(array); // [ 3, "hello", "world", {} ]
}

print(1, 2, 3, "hello", "world", {});

// spread operator
function print2() {
  var args = Array.prototype.slice.apply(arguments);
  // args = ["<br>"].concat(args).concat(["</br>"]); pre ES6
  args = ["<br>", ...args, "</br>"];

  console.log(args); // [ <br>, 'hello', 'world', '</br>' ]
}

print2("hello", "world");

// the spread operator works on iterables
const message = "Hello world";
const chars = [...message]; // [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', ... ]

// passed as argument to a function
function add(a, b) {
  return a + b;
}

const arr = [2, 10];
console.log(add(...arr)); // 12

// Could also be used to copy arrays

// Example
function multiplyBy2(base, ...numbers) {
  return numbers.map(number => number * 2 + base)
}

const answer = multiplyBy2(100, 1, 5, 20, 10);

console.log(answer); // ​​​​​[ 102, 110, 140, 120 ]​​​​​
