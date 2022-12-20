genres = ["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"]
plays = [2000, 500, 600, 150, 800, 2500, 2000]


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

  const answer = []
  for (i = 0; i < Object.keys(sort_genre_total_paly_dict).length; i++) {
    // genre_index_paly_array_dict의 각 원소 1번째 인덱스, 즉 플레이 수에 따른 정렬
    genre_index_paly_array_dict[Object.keys(sort_genre_total_paly_dict)[i]].sort(function (a, b) {
      if (a[1] < b[1]) return 1; // 내림차순 정렬
      if (a[1] === b[1]) return 0;
      if (a[1] > b[1]) return -1;
    });

    // 정렬된 genre_index_paly_array_dict의 각 키 값에 따른 원소를 추출하여 결과값 도출
    for ( j = 0; j < genre_index_paly_array_dict[Object.keys(sort_genre_total_paly_dict)[i]].length; j ++) {
      // 두개씩 선별하기 위함
      if(j > 1) break;
      answer.push(genre_index_paly_array_dict[Object.keys(sort_genre_total_paly_dict)[i]][j][0])
    }
  }
  return answer
};

console.log(get_melon_best_album(genres, plays));
