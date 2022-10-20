class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
}

let person_1 = new Person('유재석');
let person_2 = new Person('박명수');
console.log(person_1.name);
console.log(person_2.name);
person_1.talk();
