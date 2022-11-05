input = "소주만병만주소";

const is_palindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }

  if (string[0] != string[string.length - 1]) {
    return false;
  }

  return is_palindrome(string.substr(1, string.length - 2));
  // return을 넣어줘야 반환하는 값이 생겨서 최초 함수까지 반환값이 올라 올 수 있음.
};

console.log(is_palindrome(input));
