var OrderedArray = function () {
  var arr = []; // array where we store all the data
  this.size = function() {
    return arr.length;
  };
  this.display = function() {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    console.log('-------')
  };

  this.insert = function (val) {
    var index = 0;
    for(var i = 0; i < arr.length; i++, index++) {
      if(arr[i] >= val) {
        break;
      }
    }
    for(var j = arr.length; j > index; j--) {
      arr[j] = arr[j - 1];
    }
    arr[index] = val;

    return index;
  };

  this.delete = function (val) {
    var index = this.find(val);
    if(index >= 0) {
      for(var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr.splice(i, 1);
    }
  };
  this.find = function(val) {
    var lowerBound = 0;
    var upperBound = arr.length - 1;
    var current = 0;
    while(true) {
      current = Math.floor((lowerBound + upperBound) / 2);
      if(arr[current] === val) {
        return current;
      } else if(lowerBound > upperBound) {
        return -1;
      } else {
        if(arr[current] < val) {
          lowerBound = current + 1;
        } else {
          upperBound = current - 1;
        }
      }
    }
  };
  this.max = function() {
    if(!arr.length) {
      return -1;
    }
    var maxVal = arr[0];
    var index = -1;
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] > maxVal) {
        maxVal = arr[i];
        index = i;
      }
    }
    return i;
  };
  this.removeMax = function() {
    var index = this.max();
    if( index > -1) {
      return -1;
    }
    arr.splice(index, 1);
    return index;
  };
  this.merge = function (another) {
    for(var i = 0; i < another.length; i++) {
      this.insert(another[i]);
    }
  };
  this.removeDups = function () {
    for(var i = 0; i < arr.length; i++) {
      for(var j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          arr[j] = null;
        }
      }
    }
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === null) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
};

var array = new OrderedArray();
// inserting 10 elements
array.insert(77);
array.insert(99);
array.insert(44);
array.insert(55);
array.insert(22);
array.insert(88);
array.insert(11);
array.insert(0);
array.insert(66);
array.insert(66);
array.insert(66);
array.insert(66);
array.insert(33);

console.log('max value index =', array.max());
console.log('Key found at', array.find(55));

array.display();
array.delete(0);
array.delete(55);
array.delete(99);
array.display();

array.merge([1, 17, 30]);
array.display();

array.removeDups();
array.display();