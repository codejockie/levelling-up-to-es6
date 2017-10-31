// array matching

// ES5
var numbers = [1, 2, 3, 4];
var a = numbers[0];
var b = numbers[1];
var c = numbers[2];
var d = numbers[3];

// ES6
let [a, b, c, d] = numbers;
const [, , c, d] = numbers; // here a, b 1 and 2 is omitted

[c, d] = [a, b]; // c = a, d = b

// default values

const arr = [1];

const [amount, b = 1000] = arr;

amount; // 1
b; // 1000
