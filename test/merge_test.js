pry = require('pryjs');

const assert = require('chai').assert;
const merge = require('../mergeSort')

describe('Merge sort', function() {
  it("can sort a random array of munbers", function() {
    let randArray = new Array(20).fill(0).map(function(n) {return parseInt(Math.random() * (100 - 1) + 1); });
    var unsorted = [26, 96, 68, 28, 98, 62, 91, 35, 74, 62, 23, 48, 16, 61, 53, 25, 5, 46, 50, 76]
    let result = merge(randArray)
    assert.equal(Math.min(...result), result[0])
    assert.equal(Math.max(...result), result[result.length - 1])
  });
});
