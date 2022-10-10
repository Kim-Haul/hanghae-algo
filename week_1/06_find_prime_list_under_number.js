input = 20;

const find_prime_list_under_number = (number) => {
  let ans = [];

  for (i = 2; i <= number; i++) {
    let temp = [];
    for (j = 2; j <= i; j++) {
      i % j == 0 ? temp.push(i) : null;
    }
    temp.length == 1 ? ans.push(temp[0]) : null;
  }

  return ans;
};

result = find_prime_list_under_number(input);
console.log(result);
