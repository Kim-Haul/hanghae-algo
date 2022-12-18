class LinkedTuple {
  constructor() {
    this.items = [];
  }

  add(key, value) {
    this.items.push({ key, value });
  }

  get(key) {
    for (let i = 0; i < this.items.length; i++) {
      if (key == this.items[i].key) {
        return this.items[i].value;
      }
    }
  }
}

// let linkedTuple = new LinkedTuple();
// linkedTuple.add("kest", "test");
// linkedTuple.add("kest324324", "test234324");
// console.log(linkedTuple.get("kest324324"));

function hashStringToInt(key, tableSize) {
  let hash = 17;

  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class LinkedDict {
  constructor() {
    this.items = [];
    for (let i = 0; i < 8; i++) {
      this.items.push(new LinkedTuple());
    }
  }

  put(key, value) {
    const idx = hashStringToInt(key, this.items.length);
    this.items[idx].add(key, value);
  }

  get(key) {
    const idx = hashStringToInt(key, this.items.length);
    return this.items[idx].get(key);
  }
}

const linkedDict = new LinkedDict();
linkedDict.put("a", "a");
linkedDict.put("b", "b");
linkedDict.put("c", "c");
linkedDict.put("d", "d");
linkedDict.put("e", "e");
linkedDict.put("f", "f");
linkedDict.put("g", "g");
linkedDict.put("h", "h");
linkedDict.put("i", "i");
console.log(linkedDict.get("a"));
