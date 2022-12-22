// DFS는 끝까지 파고드는 것이라, 그래프의 최대 깊이 만큼의 공간을 요구. 따라서 공간을 적게 쓰지만, 최단 경로 탐색이 어려움.
// BFS는 최단 경로를 쉽게 찾을 수 있음. 모든 분기되는 수를 다 보고 오기 때문.
// 그러나 모든 분기 수를 다 저장하기 때문에 공간을 많이 쓰고, 모든걸 다 보고 오니 시간이 오래 걸릴 수 있음.

const graph = {
  1: [2, 5, 9],
  2: [1, 3],
  3: [2, 4],
  4: [3],
  5: [1, 6, 8],
  6: [5, 7],
  7: [6],
  8: [5],
  9: [1, 10],
  10: [9],
};
visited = [];

const dfs_recursion = (adjacent_graph, cur_node, visited_array) => {
  visited_array.push(cur_node);
  for (let i = 0; i < adjacent_graph[cur_node].length; i++) {
    // for문 속에서 0, 1, 2 순차적으로 각 idx에서 재귀적으로 계속 호출
    if (!visited_array.includes(adjacent_graph[cur_node][i])) {
      dfs_recursion(adjacent_graph, adjacent_graph[cur_node][i], visited_array);
    }
  }
};

dfs_recursion(graph, 1, visited);
console.log(visited);
