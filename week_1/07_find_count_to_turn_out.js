input = "11110111101";

const find_count_to_turn_out_to_all_zero_or_all_one = (string) => {
  let cnt_to_all_zero = 0;
  let cnt_to_all_one = 0;

  for (i = 0; i < string.length - 1; i++) {
    if (string[i] != string[i + 1]) {
      if (string[i + 1] == "0") {
        cnt_to_all_one += 1;
      } else if (string[i + 1] == "1") {
        cnt_to_all_zero += 1;
      }
    }
  }

  if (string[0] == 1) {
    cnt_to_all_zero += 1;
  } else {
    cnt_to_all_one += 1;
  }

  return Math.min(cnt_to_all_zero, cnt_to_all_one);
};

result = find_count_to_turn_out_to_all_zero_or_all_one(input);
console.log(result);
