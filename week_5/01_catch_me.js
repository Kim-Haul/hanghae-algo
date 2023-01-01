// 파이썬에서 규칙적으로 변화하는 값은 배열에,
// 자유자재로 변화하는 값을 저장하기 위해 사용하면 좋은 자료구조는 딕셔너리.

const c = 11;
const b = 2;
const queue = [];
let possible_loc = [];

// 너무 경우의 수가 많다. 쉽게 일반화 지어지지 않을 것 같다.
// 즉, 모든 경우의 수를 다 고려해야할 것 같다? -> BFS(queue)
const possible_brown_loc = (n) => {
  let loc = [n - 1, n + 1, 2 * n];
  for (j = 0; j < loc.length; j++) {
    if (0 <= loc[j] && loc[j] <= 200000) {
      queue.push(loc[j]);
    }
  }
};

const catch_me = (cony_loc, brown_loc) => {
  possible_brown_loc(brown_loc);

  // 위에서 possible_brown_loc()를 한번 호출 했으므로, 1초부터 시작해야 핢.
  for (i = 1; i < 200000; i++) {
    cony_loc += i;

    if (cony_loc > 200000) {
      return -1;
    }

    while (queue.length != 0) {
      const temp_loc = queue.shift();
      possible_loc.push(temp_loc);
    }

    // 중복값 제거
    const set = new Set(possible_loc);
    possible_loc = [...set];

    while (possible_loc.length != 0) {
      const temp_possible_loc = possible_loc.shift();
      if (cony_loc == temp_possible_loc) {
        return i;
      }
      possible_brown_loc(temp_possible_loc);
    }
  }

  return -1;
};

console.log(catch_me(c, b)); // 5가 나와야 합니다!
// console.log("정답 = 3 / 현재 풀이 값 = ", catch_me(10, 3));
// console.log("정답 = 8 / 현재 풀이 값 = ", catch_me(51, 50));
// console.log("정답 = 28 / 현재 풀이 값 = ", catch_me(550, 500));
