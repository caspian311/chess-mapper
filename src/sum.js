const foo = require('./other').foo;

const sum = (a, b) => {
  return a + b;
}

const huh = () => {
  return foo();
}

exports.sum = sum;
exports.huh = huh;
