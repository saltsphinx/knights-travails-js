const Board = require('./board');
const graph = Board();

const knightMoves = function knightMoves(start, end) {
  const [knight, destination] = [graph[start], graph[end]];

  if (!knight || !destination) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');
  const shortestPath = traverseGraph(knight, destination);
  console.log(`You made it in ${shortestPath.length} moves! Heres your path:`);

  shortestPath.forEach((node) => console.log(node.coordinate));
};

const traverseGraph = function traverseGraph(knight, destination, path = [knight.coordinate.toString()]) {
  
}

const knightsTour = function knightsTour(start) {
  const knight = graph[start];

  if (!knight) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');
  const visitedNeigbors = [knight];
  let traversing = true;

  while (traversing)
  {
    const neighbors = Array.from(visitedNeigbors[visitedNeigbors.length - 1]);
    for (let i = 0; i < neighbors.length; i++)
    {
      const neighbor = neighbors[i];

      if (!visitedNeigbors.includes(neighbor))
      {
        visitedNeigbors.push(neighbor);
        break;
      }
      if (i == neighbors.length - 1) traversing = false;
    }
  }

  return visitedNeigbors;
}

module.exports = knightsTour;