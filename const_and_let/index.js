// Code running with Quokka installed in VSCode

// Dealing with 'const' and 'let'

// const
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
  // append any negative numbers found in the numbers array 
  // into the negativeNumbers array constant variable above
  numbers.forEach(number => {
    if (Math.sign(number) == -1) {
      negativeNumbers.push(number);
    }
  });
}

extractNegativeNumbers([-10, -20, 10, 20, 30, -40, 60, -50]);
negativeNumbers; // [ -10, -20, -40, -50 ]​​​​​


// let
let largestString;

function findLargestString(strings) {
  // set largestString to point to the 
  // longest string found in the strings array passed in
  strings.forEach((string, currentString) => {
    if (largestString) {
      if (string.length > largestString.length) {
        largestString = string;
      } else {
        largestString = currentString;
      }
    } else {
      largestString = string;
    }
  });
}

findLargestString(["Hello", "world!", "Hello World", "Hello World!"]);
largestString;


const userIds = [1, 2, 3];
const users = [];

function fun(cb) { setTimeout(cb) }
// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
for (let i = 0; i < userIds.length; i++) {
    fun(function() {
        users.push({
            userId: userIds[i]
        });
    });
    
}
users;
