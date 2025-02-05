function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

const pi = 3.14;

console.log(`Inside math.js`);

require(`./test.js`); //Inside test.js -> Inside class.js
require(`./class.js`); // Inside class.js

module.exports = {
  add,
  sub,
  pi,
};

// console.log(sub(2, 5));
