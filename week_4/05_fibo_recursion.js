input = 20;

// 초기에는 이렇게 작성했는데.
// const fibo_recursion = (n) => {
//   let sum = 0;
//   if (n <= 2) {
//     return 1;
//   }
//   while (n >= 3) {
//     sum += fibo_recursion(n - 1) + fibo_recursion(n - 2);
//     return sum;
//   }
// };

// 이게, 훨씬 간단하네.
const fibo_recursion = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibo_recursion(n - 1) + fibo_recursion(n - 2);
};

console.log(fibo_recursion(input)); // 6765
