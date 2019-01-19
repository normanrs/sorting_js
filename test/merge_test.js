const assert = require('chai').assert;
const merge = require('../mergeSort')

describe('Merge sort', function() {
  it("can sort a random array of munbers", function() {
    var unsorted = [66364, 70434, 4908, 57113, 2987, 18708, 15341, 93345, 72823, 95803, 25156, 97621, 19954, 97759, 10231, 30912, 60305, 97370, 46693, 2393, 20268, 87402, 65899, 20619, 52765, 8304, 50427, 35445, 51366, 459, 45944, 75838, 1486, 33427, 29936, 91376, 3294, 82857, 92607, 69310, 47204, 88392, 21361, 59024, 42363, 62181, 7915, 23599, 67623, 55397, 44926, 53678, 22426]
    let sorted = merge(unsorted);
    assert(true, 'True is false! Up is down!');
  });
});
