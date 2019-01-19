pry = require('pryjs');

function mergeSort(arrayIn) {
  if (arrayIn.length < 2) { return(arrayIn) ;}
  else if (Array.isArray(arrayIn)) {
    let left = arrayIn.slice(0,Math.floor(arrayIn.length/2));
    let right = arrayIn.slice(Math.floor(arrayIn.length/2));
    return sorted(mergeSort(left), mergeSort(right));
  }
  function sorted(half1, half2) {
    for (let loc = 0; loc < half2.length; loc++) {
      if (half1[0] < half2[loc]) {
        half2.splice(loc, 0, half1.shift());
      }
    } half2 = [...half2, ...half1];
    return half2;
  }
}

function justSort(arrayIn) {
  if (Array.isArray(arrayIn) === false) { return([]) ;}
  else {
    let arrayOut = []
    while (arrayIn.length > 0) {
      arrayOut.push(Math.min(...arrayIn));
      arrayIn = removeSmallest(arrayIn);
    }
    function removeSmallest(arr) {
    var min = Math.min.apply(null, arr);
    return arr.filter((e) => {return e != min});
    }
  return arrayOut
  }
}

module.exports.mergeSort = mergeSort
module.exports.justSort = justSort
