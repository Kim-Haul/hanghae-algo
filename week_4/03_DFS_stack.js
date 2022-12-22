graph = {
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

const dfs_stack = (adjacent_graph, start_node) => {
  let stack = [start_node];
  let visited = [];

  while (stack.length != 0) {
    let cur_node = stack.pop();
    visited.push(cur_node);
    for (i = 0; i < adjacent_graph[cur_node].length; i++) {
      if (!visited.includes(adjacent_graph[cur_node][i])) {
        stack.push(adjacent_graph[cur_node][i]);
      }
    }
  }

  return visited;
};

console.log(dfs_stack(graph, 1));
// # [1, 9, 10, 5, 8, 6, 7, 2, 3, 4] 이 출력되어야 합니다!
