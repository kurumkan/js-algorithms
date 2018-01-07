// shellsort
function shellSort(givenArr) {
  var arr = givenArr.slice();
  var inner, outer;
  var temp;
  var h = 1; // step
  while(h <= arr.length / 3) {
    h = h * 3 + 1;
  }
  while(h > 0) { // reducing h down to 1
    for(outer = h; outer < arr.length; outer++) {
      temp = arr[outer];
      inner = outer;
      while(inner>h-1 && arr[inner - h] >= temp) {
        arr[inner] = arr[inner - h];
        inner -= h;
      }
      arr[inner] = temp;
    }
    h = Math.floor((h - 1) / 3);
  }
  return arr;
}

console.log('shell sort')
var array = [20, 89, 6, 42, 55, 59, 41, 69, 75, 66];
console.log('before', array);
console.log('after', shellSort(array))
