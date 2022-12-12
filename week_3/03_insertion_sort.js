input = [4, 6, 2, 9, 1];

const insertion_sort = (array) => {
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i - j - 1] > array[i - j]) {
        const temp = array[i - j - 1];
        array[i - j - 1] = array[i - j];
        array[i - j] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};

console.log(insertion_sort(input));
