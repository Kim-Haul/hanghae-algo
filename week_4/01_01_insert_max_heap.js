// 트리라는 자료구조를 이용하면 계층 구조의 데이터를 쉽게 표현할 수 있고,
// 힙( ~= 완전 이진트리 )이라는 자료구조를 이용하면 최댓값과 최솟값을 쉽게 뽑을 수 있다.

class MaxHeap {
  constructor() {
    this.items = [undefined];
  }
  // 최초 1회 풀 때, 접근 방법이 틀림.
  // 1회만 비교를 하면 안되고 해당 index 값을 기억하면서 root Node까지 비교해줘야 된다는걸 간과.
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
}

const max_heap = new MaxHeap();
max_heap.insert(3);
max_heap.insert(4);
max_heap.insert(2);
max_heap.insert(9);
console.log(max_heap.items);
