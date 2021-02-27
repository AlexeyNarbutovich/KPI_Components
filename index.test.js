const Calc = require('./calc');
const assert = require('assert');

assert.strictEqual(typeof Calc.Taylor, "function");

let t = Calc.Taylor(2);

