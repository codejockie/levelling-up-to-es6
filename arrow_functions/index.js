// Arrow functions
const array = [1, 2, 3, 4];

const byTwo = array.map(number => number * 2); // expression body

byTwo;

// NB: In expression body the => serves as the return keyword, while
// in statement body, the return keyword must be used explicitly

// Arrow functions also brings about the lexical this
var obj = {
  value: 0,
  increment: function () {
    setTimeout(function () {
      this.value++;
      console.log(this.value); // NaN
    }, 1000);
  }
};

obj.increment();

// using the fat arrow function in the callback to setTimeout() fixes this

// An example
x = 10;
y = 10;
vx = 20;
vy = 20;
 
var obj = {
  x: 0,
  y: 0,
  vx: 5,
  vy: 5,
  update: () => {
    this.x += this.vx;
    this.y += this.vy;
  },
  getPosition: function () {
    return [this.x, this.y];
  }
}
 
obj.update();
 
console.log(obj.getPosition());
console.log([x, y]);

// Another example
const person = {
  name: 'bob',
  updateName: function () {
    (function () {
      this.name = 'suzy'
    })(); // IIFE has its own scope so this.name doesn't refer to the person's name property
  }
}
person.updateName()
console.log(person.name);

// yet another
const person2 = {
  name: 'bob',
  updateName: function () {
    (() => {
      this.name = 'suzy'
    })(); // In this case, arrow functions binds this the person object's scope
  }
}
 person2.updateName()
 console.log(person2.name);


 // Example 4
 const person3 = {
  age: 10,
  setAge: function (newAge) {
      this.age = newAge;
  },
  refreshAge: function (userId) {
      fetchAgeFromDb(function (newAge) {
          this.setAge(newAge); // this.setAge is not a function
      })
  }
 }

function fetchAgeFromDb (cb) { cb(20); }
person3.refreshAge();
console.log(person3.age);

/**
 * This is a good example as to when you should have probably used a fat arrow when passing the callback into fetchAgeFromDb.
 * This is because we needed access to that setAge member when the age is returned from the database,
 * but we do not have access to it when using a normal function unless we use bind or var that = this.
 */


 // Example 5
function ListPrefixer (list, prefix) {
  this.list = list;
  this.prefix = prefix;
}
ListPrefixer.prototype.transform = function (cb) {
  this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
  this.transform(function (number) {
      return this.prefix + number;
  })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
  this.transform((number) => {
      return this.prefix + number;
  })
}

const request = new ListPrefixer([1, 2, 3], '*');

request.applyPrefix();
console.log(request.list); // [ 'NaN', 'NaN', 'NaN' ]

request.applyPrefixArrow();
console.log(request.list); // [ '*NaN', '*NaN', '*NaN' ]

/**
 * this.prefix will not reference the expected variable in the first applyPrefix function call.
 * This is an example of when we'd want to use a fat arrow to get that reference.
 */
