class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
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
    this.tail.next = new_node;
    this.tail = new_node;
  }

  dequeue() {
    if (this.is_empty()) {
      return "Queue is Empty";
    }
    let delete_head = this.head;
    this.head = this.head.next;
    return delete_head.data;
  }

  peek() {
    if (this.is_empty()) {
      return "Queue is Empty";
    }
    return this.head.data;
  }

  is_empty() {
    return this.head == null;
  }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue.peek());
