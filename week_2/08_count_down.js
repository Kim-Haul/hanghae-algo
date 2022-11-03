// 재귀함수를 사용할 때는 항상 탈출 조건을 명시.

const count_down = (number) => {
  if (number < 0) return;
  console.log(number); // number를 출력하고
  count_down(number - 1); // count_down 함수를 number - 1 인자를 주고 다시 호출한다!
};

count_down(60);
