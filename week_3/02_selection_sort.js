// input = [4, 6, 2, 9, 1];

// const selection_sort = (array) => {
//   for (i = 0; i < array.length - 1; i++) {
//     let min_idx = i;
//     let temp;
//     for (j = i; j < array.length; j++) {
//       if (array[min_idx] > array[j]) {
//         min_idx = j;
//       }
//     }

//     temp = array[i];
//     array[i] = array[min_idx];
//     array[min_idx] = temp;
//   }

//   return array;
// };

// console.log(selection_sort(input));

input = [4, 6, 2, 9, 1];

const selection_sort = (array) => {
  for (i = 0; i < array.length - 1; i++) {
    let min_idx = i;
    let temp;
    for (j = 0; j < array.length - i; j++) {
      if (array[min_idx] > array[i + j]) {
        min_idx = i + j;
      }
    }

    temp = array[i];
    array[i] = array[min_idx];
    array[min_idx] = temp;
  }

  return array;
};

console.log(selection_sort(input));
