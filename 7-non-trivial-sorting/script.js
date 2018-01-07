// shellsort
function shellSort(givenArr) {
  var arr = givenArr.slice();
  var h = 1; // step
  while(h <= arr.length / 3) {
    h = h * 3 + 1;
  }
  while(h > 0) { // reducing h down to 1
    for(var outer = h; outer < arr.length; outer++) {
      var temp = arr[outer];
      var inner = outer;
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

console.log('shell sort');
var array = [20, 89, 6, 42, 55, 59, 41, 69, 75, 66];
console.log('before', array);
console.log('after', shellSort(array));

function partitionArray(arr, left, right, pivot) {
  var leftPtr = left - 1;
  var rightPtr = right + 1;
  while(true) {
    while(leftPtr < right && arr[++leftPtr] < pivot) {
      // empty body
      // looking for the max element
    }
    while(rightPtr > left && arr[--rightPtr] > pivot) {
      // empty body
      // looking for min element
    }
    if(leftPtr >= rightPtr) {
      break; // partitioning completed
    } else {
      // swap elements
      var temp = arr[leftPtr];
      arr[leftPtr] = arr[rightPtr];
      arr[rightPtr] = temp;
    }
  }
  return leftPtr; // return partinioning position
}

console.log('Array partinioning');
var array = [149, 192, 47, 152, 159, 195, 61, 66, 17, 167, 118, 64, 27, 80, 30, 105];
var pos = partitionArray(array, 0, array.length - 1, 99);
console.log('Partitioning position', pos);
console.log('Result', array);
