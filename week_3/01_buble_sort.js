// input = [4, 6, 2, 9, 1];

// const bubble_sort = (array) => {
//   let cnt = 0;
//   while (cnt <= 4) {
//     for (i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i + 1];
//         array[i + 1] = array[i];
//         array[i] = temp;
//       }
//     }

//     cnt++;
//   }

//   return array;
// };

// console.log(bubble_sort(input));

input = [4, 6, 2, 9, 1];

const bubble_sort = (array) => {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
};

console.log(bubble_sort(input));
