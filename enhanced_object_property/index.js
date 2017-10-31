// Computed property names and method properties

// pre ES6 sample
// var person = {
//   firstname: 'Kennedy',
//   age: 20,
//   haveABirthday: function () {
//     this.age++;
//   }
// }

// person[key] = 'John' pre ES6

var key = 'lastname';

var person = {
  firstname: 'Kennedy',
  [key]: 'John',
  age: 20,
  haveABirthday () {
    this.age++;
  }
}

person.haveABirthday();
person;  // ​​​​​{ firstname: 'Kennedy',​​​​​ lastname: 'John',​​​​​​ age: 21,​​​​​ haveABirthday: [λ: haveABirthday] }​​​​​
