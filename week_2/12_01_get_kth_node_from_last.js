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

  // get_kth_node_from_last(kth) {
  //   let list = [];
  //   let cur = this.head;
  //   while (cur != null) {
  //     list.push(cur.data);
  //     cur = cur.next;
  //   }

  //   console.log(list.splice(-kth, 1));
  // }

  get_kth_node_from_last(kth) {
    let temp_cur = this.head;
    let temp_cnt = 1;

    while (temp_cur != null) {
      temp_cur = temp_cur.next;
      temp_cnt++;
    }

    let cur = this.head;
    let cnt = 1;

    while (temp_cnt - kth != cnt) {
      cur = cur.next;
      cnt++;
    }

    console.log(cur);
  }
}

let linked_list = new LinkedList(6);
linked_list.append(7);
linked_list.append(8);
linked_list.append(9);
linked_list.get_kth_node_from_last(3);
