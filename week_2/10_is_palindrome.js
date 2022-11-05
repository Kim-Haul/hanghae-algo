input = "abdcecdba";

// 굳이 split를 통해 배열로 넣어주지 않아도, string 자체에서 [index] 값 확인 가능.
// split는 원본 배열을 건드리지는 않음.
const is_palindrome = (string) => {
  let len = string.length;
  let stringList = string.split("");

  for (i = 0; i <= Math.floor(len / 2) - 1; i++) {
    if (stringList[i] != stringList[len - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(is_palindrome(input));
