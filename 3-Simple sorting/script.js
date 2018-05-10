// bubble sorting algorithm:
// invarianta - elements after i are always sorted
// O(N2)
// STABLE
function bubbleSort(arr) {
  for(var i = arr.length - 1; i > 0; i--) {
    for(var j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

var array1 = [5, 4, 3, 6, 2, 1];
bubbleSort(array1);
console.log(array1);

// selection sort
// select min element and put it in the beginning
// invarianta - elements before i are always sorted
// O(N2)
// STABLE
function selectSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var min = i;
    for(j = i; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
var array2 = [5, 4, 3, 6, 2, 1];
selectSort(array2);
console.log(array2);

// insertion sort
// invarianta - elements before current outer loop index are always partially sorted.
// O(N2)
// STABLE
function insertSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var j = i;
    while(j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}

var array3 = [5, 4, 3, 6, 2, 1];
insertSort(array3);
console.log(array3);

function genRandomArray(n = 100, ceil = 10) {
  var res = [];
  for(var i = 0; i < n; i++) {
    res.push(Math.floor(Math.random() * ceil) + 1);
  }
  return res;
}

// comparing speed
console.time('bubble');
bubbleSort(genRandomArray(10000, 100));
console.timeEnd('bubble');

console.time('select');
selectSort(genRandomArray(10000, 100));
console.timeEnd('select');


console.time('insert');
insertSort(genRandomArray(10000, 100));
console.timeEnd('insert');
