graph = {
  1: [2, 3, 4],
  2: [1, 5],
  3: [1, 6, 7],
  4: [1, 8],
  5: [2, 9],
  6: [3, 10],
  7: [3],
  8: [4],
  9: [5],
  10: [6],
};

const bfs_queue = (adj_graph, start_node) => {
  const queue = [start_node];
  const visited = [];

  while (queue.length !== 0) {
    const cur_node = queue.shift();
    visited.push(cur_node);
    for (i = 0; i < adj_graph[cur_node].length; i++) {
      if (!visited.includes(adj_graph[cur_node][i])) {
        queue.push(adj_graph[cur_node][i]);
      }
    }
  }

  return visited;
};

console.log(bfs_queue(graph, 1));
