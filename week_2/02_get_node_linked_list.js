class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    let cur = this.head;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }

  console_all() {
    let cur = this.head;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  get_node(index) {
    let idx = 0;
    let cur = this.head;
    while (idx != index) {
      cur = cur.next;
      idx++;
    }
    console.log(cur.data);
  }
}

let linked_list = new LinkedList(5);
linked_list.append(12);
linked_list.append(7);
linked_list.append(4);
linked_list.append(6);
linked_list.append(9);
linked_list.get_node(5);
