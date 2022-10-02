const find_alphabet_occurrence_array = (input) => {
  let list = new Array(26).fill(0);

  for (i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) == 32) continue;
    let idx = input.charCodeAt(i) - 97;
    list[idx] += 1;
  }

  return String.fromCharCode(list.indexOf(Math.max(...list)) + 97);
};

result = find_alphabet_occurrence_array("hello my name is sparta");
console.log(result);
