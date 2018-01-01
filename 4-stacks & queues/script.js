const Stack = function() {
  var array = [];
  this.push = function(val) {
    array.push(val);
  };
  this.pop = function() {
    return array.pop();
  };
  this.peek = function() {
    return array[array.length - 1];
  };
  this.size = function() {
    return array.length;
  };
};

// reverse string
var str = 'hello world';
var stack = new Stack();
for(var i = 0; i < str.length; i++) {
  stack.push(str[i]);
}

var result = '';
while(stack.size()) {
  result += stack.pop();
}
console.log(result);

// check brackets match
function checkBrackets(str) {
  var bracketsStack = new Stack();
  for (var i = 0; i < str.length; i++) {
    var current = str[i];
    if (current === '(' || current === '[' || current === '{') {
      bracketsStack.push(str[i]);
    } else if (current === ')' || current === ']' || current === '}') {
      var openingBracket = bracketsStack.pop();
      switch(current) {
        case ')':
          if(openingBracket !== '(') {
            return false;
          }
          break;
        case ']':
          if(openingBracket !== '[') {
            return false;
          }
          break;
        case '}':
          if(openingBracket !== '{') {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }
  return true;
}

var stringWithBrackets = 'a{b(c[d]e)f}';
var result = checkBrackets(stringWithBrackets);
console.log(result);

// queue class
var Queue = function () {
  var array;
  this.insert = function (val) {
    array.push(val);
  };
  this.remove = function() {
    return array.shift();
  };
  this.peek = function () {
    return array[0];
  };
  this.size = function () {
    return array.length;
  };
};
