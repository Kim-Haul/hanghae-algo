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

  delete() {
    let tempNode = this.items[1];
    this.items[1] = this.items[this.items.length - 1];
    this.items[this.items.length - 1] = tempNode;
    let deleteNode = this.items.pop();

    let cur_idx = 1;
    let max_idx;
    // 자식 노드 left & right 중 큰 값의 idx 저장
    if (this.items[cur_idx * 2] > this.items[cur_idx * 2 + 1]) {
      max_idx = cur_idx * 2;
    } else {
      max_idx = cur_idx * 2 + 1;
    }
    while()
    if (this.items[max_idx] > this.items[cur_idx]) {
      let temp_Node = this.items[max_idx];
      this.items[max_idx] = this.items[cur_idx];
      this.items[cur_idx] = temp_Node;
      cur_idx = max_idx;
    } else {
      break
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
