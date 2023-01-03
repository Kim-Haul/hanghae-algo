input = 'abcabcabcabcdededededede';

// 경우의 수가 좀 많을거 같은데?
const string_compression = (string) => {
  let repeatCnt = 1;
  let repeatString = [];
  let resultString = [];
  let curIndex = 0;

  //문자열 길이 1인 경우
  if (string.length === 1) return 1;
  // 문자열 단위를 1씩 증가 +1 +2 +3 ...
  // 전체 문자열의 절반까지만 구하는 이유는, 그 이상부터 쪼갰을 때 문자열의 크기가 항상 달라 (먼저 자른 앞쪽이, 뒷쪽 보다 항상 큼.)
  // 중복 될 수 없어서 의미가 없기 때문.
  for (i = 1; i <= string.length / 2; i++) {
    // 초기에 j의 조건 범위를 다음과 같이 잘못 생각해서 이중 for문을 돌림.
    // for (j = i; j <= string.length; j += i) {
    for (j = 0; j < string.length; j += i) {
      if (string.substr(curIndex, i) == string.substr(curIndex + i, i)) {
        repeatCnt++;
        curIndex += i;
        // curIndex를 따로 두는게 아니라, curIndex 자리에 j를 놓아도 무방한거였음.
      } else {
        if (repeatCnt == 1) {
          repeatString.push(string.substr(curIndex, i));
          curIndex += i;
        } else {
          repeatString.push(repeatCnt + string.substr(curIndex, i));
          curIndex += i;
        }
        repeatCnt = 1;
      }
    }
    resultString.push(repeatString.join('').length);
    repeatString = [];
    curIndex = 0;
    repeatCnt = 1;
  }

  return Math.min(...resultString);
};

console.log(string_compression(input)); // 14 가 출력되어야 합니다!
console.log('정답 = 3 / 현재 풀이 값 = ', string_compression('JAAA'));
console.log('정답 = 9 / 현재 풀이 값 = ', string_compression('AZAAAZDWAAA'));
console.log('정답 = 12 / 현재 풀이 값 = ', string_compression('BBAABAAADABBBD'));
