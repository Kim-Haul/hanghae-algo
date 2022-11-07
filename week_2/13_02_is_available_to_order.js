shop_menus = ['만두', '떡볶이', '오뎅', '사이다', '콜라'];
shop_orders = ['오뎅', '콜라', '만두', '곱창'];

const is_available_to_order = (menus, orders) => {
  let set1 = new Set([...menus, ...orders]);
  return set1.size == 5 ? true : false;
};

console.log(is_available_to_order(shop_menus, shop_orders));
