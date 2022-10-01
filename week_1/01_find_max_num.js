input = [3, 5, 6, 1, 2, 4];

// const find_max_num = (arr) => {
//   return Math.max(...arr);
// };

// const find_max_num = (arr) => {
//   let max = 0;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] >= arr[i + 1] ? (max = arr[i]) : null;
//   }
//   return max;
// };

const find_max_num = (arr) => {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    arr[i] >= max ? (max = arr[i]) : null;
  }
  return max;
};

result = find_max_num(input);
console.log(result);
