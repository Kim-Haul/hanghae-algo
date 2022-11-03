// Factorial(N) = N * Factorial(N - 1) ... Factorial(1)

const factorial = (n) => {
  if (n == 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5));
