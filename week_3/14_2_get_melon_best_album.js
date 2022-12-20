// console 찍어보면서 풀기위한 복사본

genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
plays = [500, 600, 150, 800, 2500];

const get_melon_best_album = (genre_array, play_array) => {
  let genre_total_paly_dict = {};
  let genre_index_paly_array_dict = {};

  for (i = 0; i < genre_array.length; i++) {
    // 자바스크립트 객체안에 key & value 쌍을 추가할 수 있는 새로운 방법. 기존에 몰랐음.
    // dict.genre_array[i] = play_array[i]가 안돼서 js에서는 python의 딕셔너리를 완전히 표현 못하나 싶었는데 가능.. 충격.
    if (genre_total_paly_dict[genre_array[i]] == undefined) {
      // 초기값에 대한 설정 고려 필요. undefined + number = NaN 이기 때문.
      genre_total_paly_dict[genre_array[i]] = play_array[i];
      genre_index_paly_array_dict[genre_array[i]] = [[i, play_array[i]]];
    } else {
      genre_total_paly_dict[genre_array[i]] += play_array[i];
      genre_index_paly_array_dict[genre_array[i]].push([i, play_array[i]]);
    }
  }

  // 객체 value 값으로 정렬
  const sort_genre_total_paly_dict = Object.entries(genre_total_paly_dict)
    .sort(([, a], [, b]) => b - a) // 내림차순 정렬
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  // 객체 key값 배열로 꺼내기
  // console.log(Object.keys(sort_genre_total_paly_dict));
  for (i = 0; i < Object.keys(sort_genre_total_paly_dict).length; i++) {
    genre_index_paly_array_dict[Object.keys(sort_genre_total_paly_dict)[i]];
  }

  console.log(sort_genre_total_paly_dict);
  console.log(genre_index_paly_array_dict);
};

console.log(get_melon_best_album(genres, plays));
