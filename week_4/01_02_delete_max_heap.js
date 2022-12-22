// 큐나 스택같은 선형 구조와 달리, 트리와 같은 비선형 구조는 선형구조와는 다르게 데이터가 계층적 구성.
// 선형구조와 비선형구조의 차이는 형태 뿐만이 아니라 용도도 많이 다른데,
// 선형구조는 자료를 저장하고 꺼내는 것에 초점을 두고 있고 비선형구조는 표현에 초점을 두고 있다.

class MaxHeap {
  constructor() {
    this.items = [undefined];
  }

  insert(value) {
    this.items.push(value);
    let cur_idx = this.items.length - 1;
    while (cur_idx > 1) {
      if (this.items[Math.floor(cur_idx / 2)] < this.items[cur_idx]) {
        let tempNode = this.items[Math.floor(cur_idx / 2)];
        this.items[Math.floor(cur_idx / 2)] = this.items[cur_idx];
        this.items[cur_idx] = tempNode;
        cur_idx = Math.floor(cur_idx / 2);
      } else {
        break;
      }
    }
  }

  // delete() {
  //   let tempNode = this.items[1];
  //   this.items[1] = this.items[this.items.length - 1];
  //   this.items[this.items.length - 1] = tempNode;
  //   let deleteNode = this.items.pop();

  //   let cur_idx = 1;
  //   let max_idx;
  //   while (cur_idx < this.items.length - 1) {
  //     // 자식 노드 left & right 중 큰 값의 idx 저장
  //     if (this.items[cur_idx * 2] > this.items[cur_idx * 2 + 1]) {
  //       max_idx = cur_idx * 2;
  //     } else {
  //       max_idx = cur_idx * 2 + 1;
  //     }
  //     // 실제 비교 진행
  //     if (this.items[max_idx] > this.items[cur_idx]) {
  //       let temp_Node = this.items[max_idx];
  //       this.items[max_idx] = this.items[cur_idx];
  //       this.items[cur_idx] = temp_Node;
  //       cur_idx = max_idx;
  //     } else {
  //       break;
  //     }
  //   }

  //   return deleteNode;
  // }

  delete() {
    let tempNode = this.items[1];
    this.items[1] = this.items[this.items.length - 1];
    this.items[this.items.length - 1] = tempNode;
    let deleteNode = this.items.pop();

    let cur_idx = 1;

    while (cur_idx < this.items.length - 1) {
      let left_child_index = cur_idx * 2;
      let right_child_index = cur_idx * 2 + 1;
      let max_idx = cur_idx;

      // 기존에 짠 코드에서
      // items[cur_idx * 2]만 있고, this.items[cur_idx * 2 + 1])가 없을 경우에 오류가 생길 것 같은 예감이 들어 아래와 같은 조건으로 변경.

      if (left_child_index < this.items.length - 1 && this.items[left_child_index] > this.items[cur_idx]) {
        max_idx = left_child_index;
      }

      if (right_child_index < this.items.length - 1 && this.items[right_child_index] > this.items[cur_idx]) {
        max_idx = right_child_index;
      }

      if (max_idx == cur_idx) break;

      let temp_Node = this.items[max_idx];
      this.items[max_idx] = this.items[cur_idx];
      this.items[cur_idx] = temp_Node;
      cur_idx = max_idx;
    }

    return deleteNode;
  }
}

const max_heap = new MaxHeap();
max_heap.insert(8);
max_heap.insert(6);
max_heap.insert(7);
max_heap.insert(2);
max_heap.insert(5);
max_heap.insert(4);
console.log(max_heap.items);
max_heap.delete();
console.log(max_heap.items);
