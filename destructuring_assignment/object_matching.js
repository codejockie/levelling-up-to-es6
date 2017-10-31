
function getConfig() {
  return {
    isOn: true,
    amount: 10
  }
}

// ES5
// var config = getConfig();
// var isOn = config.isOn;
// var amount = config.amount;

// ES6
const {
  isOn,
  amount
} = getConfig();

const config = {};

function setConfig({ isOn, amount }) {
  config = {
    isOn,
    amount
  };
}

setConfig({ isOn: true, amount: 20 });

// deep object matching
function getConfig() {
  return {
    isOn: true,
    amount: 10,
    servers: {
      a: true,
      b: 30
    }
  }
}

const {
  isOn: mySpecialIsOnBool,
  amount: restartTimeout,
  servers: {
    b: serverB
  }
} = getConfig();

mySpecialIsOnBool; // true
serverB; // 30


// Default values

const obj = {
  isOn: true,
  amount: 10
};

const {
  isOn: isServerOn,
  amount = 1000
} = obj;

isServerOn; // true
amount; // 10 if amount is set in obj else 1000
