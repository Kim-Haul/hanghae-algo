s = "())";

const is_correct_parenthesis = (string) => {
  let stack = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack += 1;
    } else {
      stack -= 1;
    }

    if (stack < 0) {
      return false;
    }
  }

  if (stack == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(is_correct_parenthesis(s));
