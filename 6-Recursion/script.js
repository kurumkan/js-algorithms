// count pythagorean numbers
function pNumber(n) {
  if(n < 2) {
    return 1;
  }
  return n + pNumber(n - 1);
}

console.log(pNumber(4));
console.log(pNumber(5));
console.log(pNumber(6));
