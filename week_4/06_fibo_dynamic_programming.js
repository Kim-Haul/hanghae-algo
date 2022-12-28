input = 100;

// 동적 계획법의 핵심은 메모이제이션.
memo = {
  1: 1,
  2: 1,
};

const fibo_dynamic_programming = (n, fibo_memo) => {
  if (fibo_memo[n]) {
    return fibo_memo[n];
  }
  // 요 밑에 코드 신기하네.
  const nth_fibo = fibo_dynamic_programming(n - 1, fibo_memo) + fibo_dynamic_programming(n - 2, fibo_memo);
  fibo_memo[n] = nth_fibo;

  return nth_fibo;
};

console.log(fibo_dynamic_programming(input, memo));
