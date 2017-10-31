// const and let introduces block scoping
{
  const fn = function () { return 1; }
  console.log(fn());
  {
    const fn = function () { return 2; }
    console.log(fn());
  }
  console.log(fn());
}

// a perfect example
const MAX_NUM = 5;

for (var i = 0; i < MAX_NUM; i++) {
 setTimeout(function() {
   console.log(i);
 });
}

for (let i = 0; i < MAX_NUM; i++) {
 setTimeout(function() {
   console.log(i);
 });
}

// An example of this in action
const run = true;
let name = 'bob';
if (run) {
    let name = 'charley'
    console.log(name);
}
console.log(name);

// Also works like above in strict mode
"use strict";
{
  function fn() { return 1; }
  console.log(fn());
  {
    function fn() { return 2; }
    console.log(fn());
  }
  console.log(fn());
}

// yet another
const MAX = 10;
let amount = 0;
while (amount++ < MAX) {
  let sum = amount;
}
console.log(sum);
