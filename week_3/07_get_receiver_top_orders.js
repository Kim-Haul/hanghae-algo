// top_heights = [6, 9, 5, 7, 4];

// const get_receiver_top_orders = (heights) => {
//   const receiver_top_index = heights.map((v, i) => {
//     return i + 1;
//   });
//   const receiver_top = [];
//   const len = heights.length;
//   for (i = 1; i < len; i++) {
//     for (j = i + 1; j <= len; j++) {
//       if (heights[len - i] < heights[len - j]) {
//         receiver_top.unshift(receiver_top_index[len - j]);
//         break;
//       }
//     }
//     if (receiver_top.length != i) {
//       receiver_top.unshift(0);
//     }
//   }
//   receiver_top.unshift(0);
//   return receiver_top;
// };

// console.log(get_receiver_top_orders(top_heights));

top_heights = [6, 2, 5, 7, 4];

const get_receiver_top_orders = (heights) => {
  const get_receiver_top = new Array(heights.length).fill(0);
  while (heights.length > 0) {
    const right_top = heights.pop();
    for (i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > right_top) {
        get_receiver_top[heights.length] = i + 1;
        break;
      }
    }
  }

  return get_receiver_top;
};

console.log(get_receiver_top_orders(top_heights));
