// Tags

function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

const name = "bob";
const age = 20;
tag`hello my name is ${name}. my age is ${age}.`

// Raw
function tag(strings, ...values) {
  console.log(strings.raw[0]); // ​​​​​hello my name\nis bob. my age is\n 10.​​​​​
}

tag`hello my name\nis bob. my age is\n 10.`

function error (strings, err) {
  error = `status: ${err.status}, message: ${err.message}`
  return `${strings[0]}{${error}}`
}

const err = {
  message: 'oh no, an error!',
  status: 404
}

const message = error`An error has occurred: ${err}`

console.log(message); // An error has occurred: {status: 404, message: oh no, an error!}​​​​​

// Example
function sumItUp (strings, ...values) {
  let sum = 0;
  values.forEach(value => sum += value);
  return `the total sum was $${sum}`
}

const answer = sumItUp`the numbers are ${1}, ${2}, ${3}, ${4}, ${5}`
console.log(answer);
