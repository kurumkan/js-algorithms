// count pythagorean numbers
function pNumber(n) {
  if(n < 2) {
    return 1;
  }
  return n + pNumber(n - 1);
}

// non-recursive alternative with stacks
function pNumberSimple(n) {
  var result = 0;
  var stack = [];
  while(n > 0) {
    stack.push(n--);
  }
  while(stack.length) {
   result += stack.pop();
  }
  return result;
}

console.log('pythagorean numbers');
console.log(4, pNumber(4), pNumberSimple(4));
console.log(4, pNumber(5), pNumberSimple(5));
console.log(4, pNumber(6), pNumberSimple(6));

// get factorial of a number
function fact(n) {
  if(n < 2) {
    return 1;
  }
  return n * fact(n - 1);
}

//

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
console.log(binRec(arr, 5, 0, arr.length - 1));
console.log(binRec(arr, 1000, 0, arr.length - 1));

// hanoi towers
function doTowers(topN, from, inter, to) {
  if(topN === 1) {
    console.log('Disk 1 from '+ from + ' to ' + to);
  } else {
    doTowers(topN - 1, from, to, inter);
    console.log('Disk ' + topN + ' from ' + from + ' to ' + to);
    doTowers(topN - 1, inter, from, to);
  }
}

doTowers(3, 'A', 'B', 'C');

// n power p
function pow(n, p) {
  if(p === 1) {
    return n;
  }
  return n * pow(n, p - 1);
}
console.log('power', 5, 3, pow(5, 3));
console.log('power', 2, 5, pow(2, 5));