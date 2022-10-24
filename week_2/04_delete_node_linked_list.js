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

  get_node(index) {
    let idx = 0;
    let cur = this.head;
    while (idx != index) {
      cur = cur.next;
      idx++;
    }
    // console.log(cur.data);

    return cur;
  }

  add_node(index, value) {
    if (index == 0) {
      let next_node = this.head;
      this.head = new Node(value);
      this.head.next = next_node;

      return;
    }
    let new_node = new Node(value);
    let cur_node = this.get_node(index - 1);
    let next_node = cur_node.next;

    cur_node.next = new_node;
    new_node.next = next_node;
  }

  delete_node(index) {
    let cur_node = this.get_node(index);
    let next_node = cur_node.next;
    cur_node.data = next_node.data;
    cur_node.next = next_node.next;
  }
}

let linked_list = new LinkedList(5);
linked_list.append(12);
linked_list.add_node(0, 3);
linked_list.console_all();
linked_list.delete_node(0);
linked_list.console_all();
