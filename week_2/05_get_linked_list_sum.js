class Node {
  constructor(data) {
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
    if (cur.data == undefined) {
      this.head = new Node(data);
      return;
    }

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
}

const get_linked_list_sum = (linked_list_1, linked_list_2) => {};

linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(get_linked_list_sum(linked_list_1, linked_list_2));
