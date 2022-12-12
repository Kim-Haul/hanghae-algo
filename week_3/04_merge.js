array_a = [1, 2, 3, 5];
array_b = [4, 6, 7, 8];

const merge = (array1, array2) => {
  const array_c = [];
  const array1_len = array1.length;
  const array2_len = array2.length;
  for (i = 0; i < array1_len + array2_len; i++) {
    if (array1[0] < array2[0]) {
      array_c.push(array1[0]);
      array1.shift();
    } else if (array1[0] > array2[0]) {
      array_c.push(array2[0]);
      array2.shift();
    }

    if (array1.length == 0) {
      const array2_rest_len = array2.length;
      for (j = 0; j < array2_rest_len; j++) {
        array_c.push(array2[0]);
        array2.shift();
      }
      break;
    } else if (array2.length == 0) {
      const array1_rest_len = array1.length;
      for (k = 0; k < array1_rest_len; k++) {
        array_c.push(array1[0]);
        array1.shift();
      }
      break;
    }
  }

  return array_c;
};

console.log(merge(array_a, array_b));
