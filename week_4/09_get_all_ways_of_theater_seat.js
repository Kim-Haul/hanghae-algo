seat_count = 9;
vip_seat_array = [4, 7];

// 동적 계획법의 핵심은 메모이제이션.
memo = {
  1: 1,
  2: 2,
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

const get_all_ways_of_theater_seat = (total_count, fixed_seat_array) => {
  const seat_list = new Array(total_count).fill(0);
  for (i = 0; i < fixed_seat_array.length; i++) {
    seat_list[fixed_seat_array[i] - 1] = 1;
  }

  let result = 1;
  let temp_sum = 0;

  for (j = 0; j < seat_list.length; j++) {
    if (seat_list[j] == 0) {
      temp_sum++;
      if (j == seat_list.length - 1) {
        result *= fibo_dynamic_programming(temp_sum, memo);
      }
    } else if (seat_list[j] == 1) {
      result *= fibo_dynamic_programming(temp_sum, memo);
      temp_sum = 0;
    }
  }

  return result;
};

console.log(get_all_ways_of_theater_seat(seat_count, vip_seat_array)); // 12
console.log("정답 = 4 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(9, [2, 4, 7]));
console.log("정답 = 26 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(11, [2, 5]));
console.log("정답 = 6 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(10, [2, 6, 9]));
