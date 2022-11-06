// 12_01과 12_02의 발상 자체는 다르지만, 시간 복잡도 면에서는 차이가 없음.

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

  // 1단계 : ㅁ  -- <kth> -- ㅁ
  // 2단계 :   ㅁ  -- <kth> -- ㅁ
  // 3단계 :     ㅁ  -- <kth> -- ㅁ

  get_kth_node_from_last(kth) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < kth; i++) {
      fast = fast.next;
    }

    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }

    console.log(slow);
  }
}

let linked_list = new LinkedList(6);
linked_list.append(7);
linked_list.append(8);
linked_list.append(9);
linked_list.append(10);
linked_list.append(11);
linked_list.get_kth_node_from_last(2);
