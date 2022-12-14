// Array : 특정 원소 조회빠름, 중간 삽입 삭제 느림 :: 데이터 조회가 빈번하다면 Array 사용
// LinkedList : 특정 원소 조회 느림, 중간 삽입 삭제 빠름 :: 삽입과 삭제가 빈번하다면 LinkedList 사용

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
}

let linked_list = new LinkedList(3);
linked_list.append(4);
linked_list.append(5);
linked_list.append(6);
linked_list.append(7);
linked_list.console_all();
