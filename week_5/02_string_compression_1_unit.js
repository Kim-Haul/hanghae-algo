input = 'aabbaccc';

const string_compression_1_unit = (string) => {
  let repeatCnt = 1;
  let repeatString = [];

  for (i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      repeatCnt++;
    } else {
      if (repeatCnt == 1) {
        repeatString.push(string[i]);
      } else {
        repeatString.push(repeatCnt + string[i]);
      }
      repeatCnt = 1;
    }
  }

  // 배열을 문자열로 나누기
  return repeatString.join('');
};

console.log(string_compression_1_unit(input));
