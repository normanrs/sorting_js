pry = require('pryjs');
const assert = require('chai').assert;
const sort = require('../sortSuite');

describe('Sorting functions', function() {
  it("can merge sort a random array of munbers", function() {
    let randoms = new Array(20).fill(0).map(function(n) {return parseInt(Math.random() * (100 - 1) + 1); });
    let randArray = [...new Set(randoms)];
    let result = sort.mergeSort(randArray)
    assert.equal(Math.min(...result), result[0])
    assert.equal(Math.max(...result), result[result.length - 1])
  });

  it("can just sort the damn array", function() {
    let randoms = new Array(20).fill(0).map(function(n) {return parseInt(Math.random() * (100 - 1) + 1); });
    let randArray = [...new Set(randoms)];
    let result = sort.justSort(randArray)
    assert.equal(Math.min(...result), result[0])
    assert.equal(Math.max(...result), result[result.length - 1])
  });
});
