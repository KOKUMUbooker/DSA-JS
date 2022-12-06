class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Puny');
list.push('Earthlings');

// var first = new Node('Hi');
// first.next = new Node('There');
// first.next.next = new Node('Earthling');
console.log(list);
