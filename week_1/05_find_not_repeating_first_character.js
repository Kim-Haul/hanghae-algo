input = "abababade";

const find_not_repeating_character = (string) => {
  let list = new Array(26).fill(0);
  let not_repeating_char_array = [];

  for (i = 0; i < string.length; i++) {
    if (input.charCodeAt(i) == 32) continue;
    let idx = string.charCodeAt(i) - 97;
    list[idx] += 1;
  }

  for (j = 0; j < list.length; j++) {
    list[j] == 1
      ? not_repeating_char_array.push(String.fromCharCode(j + 97))
      : null;
  }

  // let temp = string.indexOf(not_repeating_char_array[0]);
  // let ans = not_repeating_char_array[0];

  // for (k = 1; k < not_repeating_char_array.length; k++) {
  //   if (string.indexOf(not_repeating_char_array[k]) < temp) {
  //     temp = string.indexOf(not_repeating_char_array[k]);
  //     ans = not_repeating_char_array[k];
  //   }
  // }

  // return ans;

  for (l = 0; l < string.length; l++) {
    if (not_repeating_char_array.includes(string[l])) {
      return string[l];
    }
  }
};

result = find_not_repeating_character(input);
console.log(result);
