var Link = function(id, data) {
  this.id = id;
  this.data = data;
  this.next = null;

  this.display = function() {
    console.log(id, ':', data);
  }
};

var Iterator = function (list) {
  var next = null;
  var current = null;

  this.reset = function () {
    next = null;
    current = null;
  };
  this.next = function () {
    if(!next) {
      next = list.getFirst();
      current = null;
    } else {
      current = next;
      next = next.next;
    }
    return next;
  };
  this.hasNext = function () {
    return !!next;
  };
};

var LinkedList = function () {
  var first = null;
  this.insert = function(id, data) {
    var newLink = new Link(id, data);
    newLink.next = first;
    first = newLink;
  };
  this.deleteFirst = function () {
    var temp = first;
    first = first.next;
    return first;
  };
  this.getFirst = function () {
    return first;
  };
  this.find = function (id) {
    var current = first;
    while(current !== null) {
      if(current.id === id) {
        return current;
      }
      current = current.next;
    }
    return null;
  };
  this.delete = function(id) {
    var current = first;
    var prev = first;
    while(current !== null) {
      if(current.id === id) {
        if(current === prev) {
          first = first.next;
        } else {
          prev.next = current.next;
        }
        return current;
      } else {
        prev = current;
        current = current.next;
      }
    }
    return null;
  };
  this.getIterator = function () {
    return new Iterator(this);
  };
  this.display = function () {
    console.log('LinkedList: ');
    var current = first;
    while(current !== null) {
      current.display();
      current = current.next;
    }
  };
};

var list = new LinkedList();
list.insert('1', 'first');
list.insert('2', 'second');
list.insert('3', 'third');
list.insert('4', 'fourth');
list.insert('5', 'fifth');
list.display();

var element = list.find('3');
if(element) {
  console.log('found!');
  element.display();
} else {
  console.log('element doesn\'t exist');
}

var elementToDelete = list.delete('4');
if(elementToDelete) {
  console.log('deleted!');
  elementToDelete.display();
} else {
  console.log('can\'t delete');
}
list.display();

console.log('working with iterator');

var myIterator = list.getIterator();

while(myIterator.hasNext()) {
  var current = myIterator.next();
  current.display();
}
