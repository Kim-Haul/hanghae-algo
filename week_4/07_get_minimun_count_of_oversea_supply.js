const ramen_stock = 4;
const supply_dates = [4, 10, 15];
const supply_supplies = [20, 5, 10];
const supply_recover_k = 30;

// 이런 1차원적 사고 좋지 않아.
// const get_minimum_count_of_overseas_supply = (stock, dates, supplies, k) => {
//   supplies.sort((a, b) => b - a);
//   const supply_need = k - stock;
//   let min = 0;
//   let sum = 0;
//   for (i = 0; i < supplies.length; i++) {
//     if (sum >= supply_need) return min;
//     sum += supplies[i];
//     min++;
//   }
//   return min;
// };

const get_minimum_count_of_overseas_supply = (stock, dates, supplies, k) => {
  let min_cnt = 0;
  let date_idx = 0;
  let max_heap = [];

  while (stock <= k) {
    while (stock >= dates[date_idx]) {
      max_heap.push(supplies[date_idx]);
      date_idx++;
    }

    // --------------- 최소 / 최댓값을 바로 꺼내 쓸 수 있는 구조? -> 힙 ---------------
    max_heap.sort((a, b) => b - a);
    stock += max_heap.shift();
    min_cnt++;
  }

  return min_cnt;
};

console.log(get_minimum_count_of_overseas_supply(ramen_stock, supply_dates, supply_supplies, supply_recover_k));
console.log(get_minimum_count_of_overseas_supply(4, [4, 10, 15], [20, 5, 10], 30));
console.log(get_minimum_count_of_overseas_supply(4, [4, 10, 15, 20], [20, 5, 10, 5], 40));
console.log(get_minimum_count_of_overseas_supply(2, [1, 10], [10, 100], 11));
