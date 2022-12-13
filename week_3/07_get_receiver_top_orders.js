top_heights = [6, 9, 5, 7, 4];

const get_receiver_top_orders = (heights) => {
  const receiver_top_index = [1, 2, 3, 4, 5];
  const receiver_top = [];
  const len = heights.length;
  for (i = 1; i < len; i++) {
    for (j = 2; j < len - i; j++) {
      if (heights[len - i] < heights[len - j]) {
        receiver_top.push(receiver_top_index[len - j]);
        break;
      }
    }
  }
  return receiver_top;
};

console.log(get_receiver_top_orders(top_heights));
