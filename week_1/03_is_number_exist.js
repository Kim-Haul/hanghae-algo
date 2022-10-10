const is_number_exist = (number, array) => {
  // for (i = 0; i < array.length; i++) {
  //   if (array[i] == number) return true;
  // }

  // return false;

  return array.includes(number) ? true : false;
};

result = is_number_exist(3, [1, 4, 5, 6, 7]);
console.log(result);
