// count pythagorean numbers
function pNumber(n) {
  if(n < 2) {
    return 1;
  }
  return n + pNumber(n - 1);
}
console.log('pythagorean numbers');
console.log(4, pNumber(4));
console.log(4, pNumber(5));
console.log(4, pNumber(6));

// get factorial of a number
function fact(n) {
  if(n < 2) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log('factorials');
console.log(4, fact(4));
console.log(5, fact(5));
console.log(6, fact(6));

// binary search with recursion
function binRec(array, key, lowerBound, upperBound) {
  if(lowerBound > upperBound) {
    return -1;
  }
  var curIn = Math.floor((lowerBound + upperBound) / 2);
  if(key === array[curIn]) {
    return curIn;
  }
  if(array[curIn] < key) {
    lowerBound = curIn + 1;
  } else {
    upperBound = curIn - 1;
  }
  return binRec(array, key, lowerBound, upperBound);
}

console.log('binary search');
var arr = [1, 2, 3, 4, 5, 100, 150, 332];
console.log(binRec(arr, 100, 0, arr.length - 1));