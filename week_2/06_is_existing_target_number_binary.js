finding_target = 14;
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const is_existing_target_number_binary = (target, array) => {
  let cnt = 1;
  while (array.length > 2) {
    if (array[Math.floor(array.length / 2) - 1] == target) {
      console.log(cnt + '번 검사를 했습니다.');
      return true;
    } else if (array[Math.floor(array.length / 2) - 1] > target) {
      array.splice(Math.floor(array.length / 2));
      cnt++;
    } else {
      array.splice(0, Math.floor(array.length / 2));
      cnt++;
    }
  }

  console.log(cnt + '번 검사를 했습니다.');
  return array[0] == target || array[1] == target ? true : false;
};

result = is_existing_target_number_binary(finding_target, finding_numbers);
console.log(result);
