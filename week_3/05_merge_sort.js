array = [5, 3, 2, 1, 6, 8, 7, 4];

const merge_sort = (array) => {
  if (array.length <= 1) return array;
  const mid = array.length / 2;
  const left_array = merge_sort(array.slice(0, mid));
  const right_array = merge_sort(array.slice(mid));
  return merge(left_array, right_array);
};

const merge = (array1, array2) => {
  result = [];
  array1_index = 0;
  array2_index = 0;
  while (array1_index < array1.length && array2_index < array2.length) {
    if (array1[array1_index] < array2[array2_index]) {
      result.push(array1[array1_index]);
      array1_index += 1;
    } else {
      result.push(array2[array2_index]);
      array2_index += 1;
    }

    if (array1_index == array1.length) {
      while (array2_index < array2.length) {
        result.push(array2[array2_index]);
        array2_index += 1;
      }
    }

    if (array2_index == array2.length) {
      while (array1_index < array1.length) {
        result.push(array1[array1_index]);
        array1_index += 1;
      }
    }
  }

  return result;
};

console.log(merge_sort(array));
