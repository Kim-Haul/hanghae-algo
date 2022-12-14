class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let new_node = new Node(data);
    if (this.is_empty()) {
      this.head = new_node;
      this.tail = new_node;
      return;
    }
    new_node.next = this.tail;
    this.tail = new_node;
  }

  dequeue(data) {}

  is_empty() {
    return this.head == null;
  }
}

let stack = new Stack();
stack.enqueue(4);
stack.enqueue(5);
stack.enqueue(6);
console.log(stack);
