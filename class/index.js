// Classes

// ES5
var PersonOne = function (name, age) {
  this.name = name;
  this.age = age;
}

PersonOne.prototype.jump = function () {
  console.log('jump');
}

const personOne = new PersonOne('Bob', 20);
personOne.jump(); // jump

// Now to ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  jump() {
    console.log('jump');
  }
}

const person = new Person('Bob', 20);
person.jump();

// Inheritance
class Employee extends Person {
  constructor(name, age, years) {
    super(name, age);
    this.years = years;
  }

  jump() {
    super.jump(); // accessing the parent class's jump method
    console.log('jump really high');
  }
}

const employee = new Employee('Bob', 20, 10);
employee.jump(); // ​​​​​jump really high​​​​​
