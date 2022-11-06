// 문자열에도 ㄱㄴㄷ 순으로 정렬만 되어있다면, 이진탐색 적용가능.
// 정렬의 시간 복잡도는 배열의 길이가 N이라고 한다면, O(NlogN)

shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];
shop_orders = ["오뎅", "콜라", "만두", "사이다"];

const is_available_to_order = (menus, orders) => {
  let newList = orders.map((v) => menus.includes(v));

  return newList.includes(false) ? false : true;
};

console.log(is_available_to_order(shop_menus, shop_orders));
