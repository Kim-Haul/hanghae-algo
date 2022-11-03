// 이진 탐색이 가능할 때는, :: 항상 일정한 규칙으로 정렬되어 있을때만 탐색이 가능

finding_target = 1;
finding_numbers = [0, 3, 5, 6, 1, 2, 4];

// const is_exist_target_number_binary = (target, numbers) => {
//   return numbers.includes(target) ? true : false;
// };

const is_exist_target_number_binary = (target, numbers) => {
  console.log(finding_numbers.sort());
};

result = is_exist_target_number_binary(finding_target, finding_numbers);
console.log(result);
