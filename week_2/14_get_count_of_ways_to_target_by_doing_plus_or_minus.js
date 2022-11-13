// python에서 전역변수를 함수 내부에서 변경시켜주고 싶으면 global 선언을 해주어야 함. (call by object reference)

numbers = [1, 1, 1, 1, 1];
target_number = 3;

let result = [];
const get_all_ways_to_by_doing_plus_or_munus = (array, cur_index, cur_sum, all_ways) => {
  if (cur_index == numbers.length) {
    all_ways.push(cur_sum);
    return;
  }
  get_all_ways_to_by_doing_plus_or_munus(array, cur_index + 1, cur_sum + numbers[cur_index], all_ways);
  get_all_ways_to_by_doing_plus_or_munus(array, cur_index + 1, cur_sum - numbers[cur_index], all_ways);
};

const get_count_of_ways_to_target_by_doing_plus_or_minus = (array, target) => {
  let ans = [];
  get_all_ways_to_by_doing_plus_or_munus(array, 0, 0, result);
  ans = result.filter((v) => v == target);
  return ans.length;
};

// get_all_ways_to_by_doing_plus_or_munus(numbers, 0, 0, result);
console.log(get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number));
console.log("총 가짓수는", result);
