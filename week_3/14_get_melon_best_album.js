genres = ["classic", "pop", "classic", "classic", "pop"];
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
  return genre_total_paly_dict;
};

console.log(get_melon_best_album(genres, plays));
