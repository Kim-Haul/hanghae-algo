class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    let new_head = new Node(data);
    new_head.next = this.head;
    this.head = new_head;
  }

  pop() {
    if (this.is_empty()) {
      return 'pop : Stack is Empty';
    }
    let delete_head = this.head;
    this.head = this.head.next;
    return delete_head;
  }

  peek() {
    if (this.is_empty()) {
      return 'peek : Stack is Empty';
    }
    return this.head.data;
  }

  is_empty() {
    return this.head == null;
  }
}

let stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());
