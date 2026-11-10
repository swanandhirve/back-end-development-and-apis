const assert = require('assert').strict;
const checkPrime = require('./index');

assert.strictEqual(
    checkPrime.isPrime(1),
    false
);

assert.strictEqual(
    checkPrime.isPrime(2),
    true
);

assert.strictEqual(
    checkPrime.isPrime(71),
    true
);

assert.strictEqual(
    checkPrime.isPrime(6),
    false
);