// 파이썬의 딕셔너리 -> 자바 스크립트의 객체와 비슷한 역할

function hashStringToInt(key, tableSize) {
  let hash = 17;

  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  constructor() {
    this.table = new Array(71);
  }

  setItem(key, value) {
    const idx = hashStringToInt(key, this.table.length);
    this.table[idx] = value;
  }

  getItem(key) {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx];
  }
}

let myTable = new HashTable();

myTable.setItem("firstName", "eunjin");
myTable.setItem("SecondName", "inho");
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("SecondName"));
