shop_prices = [30000, 2000, 1500000];
user_coupons = [20, 40];

const get_max_discounted_price = (prices, coupons) => {
  prices.sort((a, b) => b - a);
  coupons.sort((a, b) => b - a);
  let sum = 0;
  for (i = 0; i < prices.length; i++) {
    if (coupons[i] != undefined) {
      sum += (prices[i] * (100 - coupons[i])) / 100;
    } else {
      sum += prices[i];
    }
  }

  return sum;
};

console.log(get_max_discounted_price(shop_prices, user_coupons));
