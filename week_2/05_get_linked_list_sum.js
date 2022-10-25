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

const _get_linked_list_sum = (linked_list) => {
  let sum = 0;
  let head = linked_list.head;
  while (head != undefined) {
    sum = sum * 10 + head.data;
    head = head.next;
  }

  return sum;
};

const get_linked_list_sum = (linked_list_1, linked_list_2) => {
  // let sum_1 = 0;
  // let head_1 = linked_list_1.head;
  // while (head_1 != undefined) {
  //   sum_1 = sum_1 * 10 + head_1.data;
  //   head_1 = head_1.next;
  // }

  // let sum_2 = 0;
  // let head_2 = linked_list_2.head;
  // while (head_2 != undefined) {
  //   sum_2 = sum_2 * 10 + head_2.data;
  //   head_2 = head_2.next;
  // }

  let sum_1 = _get_linked_list_sum(linked_list_1);
  let sum_2 = _get_linked_list_sum(linked_list_2);

  return sum_1 + sum_2;
};

linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(get_linked_list_sum(linked_list_1, linked_list_2));
