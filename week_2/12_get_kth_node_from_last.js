class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value, next) {
    this.head = new Node(value);
  }
}

let linked_list = new LinkedList(6);

console.log(linked_list);
