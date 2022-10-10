input = [0, 3, 5, 6, 1, 2, 4];

const find_max_plus_or_multiply = (array) => {
  let sum = array[0];
  for (i = 1; i < array.length; i++) {
    // if (array[i] == 0 || array[i] == 1 || sum == 0 || sum == 1) {
    if (array[i] <= 1 || sum <= 1) {
      sum += array[i];
    } else {
      sum *= array[i];
    }
  }

  return sum;
};

result = find_max_plus_or_multiply(input);
console.log(result);
