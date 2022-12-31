const current_r = 7;
const current_c = 4;
const current_d = 0;
current_room_map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// --------------- 모든 칸을 탐색해야한다? -> BFS ---------------

// 북(0) 동(1) 남(2) 서(3) 방향 개념.
const row = [-1, 0, 1, 0];
const column = [0, 1, 0, -1];

// a. 왼쪽 방향에 아직 청소하지 않은 공간이 존재한다면,
// 그 방향으로 회전한 다음 한 칸 전진하고 청소 후 다시 탐색.

const possible_direction = (d) => {
  return (d + 3) % 4;
};

// b. 왼쪽 방향에 청소할 공간이 없다면, 그 방향으로 회전하고 다시 왼쪽 탐색.
// c. 네 방향 모두 청소가 되어 있거나, 벽인 경우에는 바라보는 방향을 유지하고 한 칸 후진, 다시 왼쪽부터 탐색.

const go_back_direction = (d) => {
  return (d + 2) % 4;
};

// d. 네 방향 모두 청소가 이미 되어 있거나 벽이면서,
// 뒤 쪽 방향이 벽이라 후진도 할 수 없으면 STOP.

const get_count_of_departments_cleaned_by_robot_vacuum = (r, c, d, room_map) => {
  let cnt_clean_room = 1;
  room_map[r][c] = 2;
  let queue = [[r, c, d]];

  while (queue.length != 0) {
    let temp_queue = queue.shift();
    let temp_row = temp_queue[0];
    let temp_column = temp_queue[1];
    let temp_d = temp_queue[2];
    let k = 0;

    for (i = 0; i < 4; i++) {
      if (room_map[temp_row + row[possible_direction(temp_d)]][temp_column + column[possible_direction(temp_d)]] == 0) {
        cnt_clean_room++;
        room_map[temp_row + row[possible_direction(temp_d)]][temp_column + column[possible_direction(temp_d)]] = 2;
        queue.push([temp_row + row[possible_direction(temp_d)], temp_column + column[possible_direction(temp_d)], possible_direction(temp_d)]);
        break;
      } else {
        temp_d = possible_direction(temp_d);
        k++;
      }
    }

    if (k == 4) {
      if (room_map[temp_row + row[go_back_direction(temp_d)]][temp_column + column[go_back_direction(temp_d)]] == 1) {
        return cnt_clean_room;
      } else {
        queue.push([temp_row + row[go_back_direction(temp_d)], temp_column + column[go_back_direction(temp_d)], temp_d]);
      }
    }
  }
};
console.log(get_count_of_departments_cleaned_by_robot_vacuum(current_r, current_c, current_d, current_room_map)); // 57

current_room_map2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log("정답 = 29 / 현재 풀이 값 = ", get_count_of_departments_cleaned_by_robot_vacuum(6, 3, 1, current_room_map2));
current_room_map3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log("정답 = 33 / 현재 풀이 값 = ", get_count_of_departments_cleaned_by_robot_vacuum(7, 4, 1, current_room_map3));
current_room_map4 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log("정답 = 25 / 현재 풀이 값 = ", get_count_of_departments_cleaned_by_robot_vacuum(6, 2, 0, current_room_map4));
