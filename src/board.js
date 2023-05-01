const Node = require('./node');

const KnightMoves = [
  [-1, 2],
  [1, 2],
  [-1, -2],
  [1, -2]
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
]

const Board = function BoardFactory() {
  const generateBoard = function generateBoard() {
    const node = Node([0, 0]);
    generateNeighbors(node);

    return node;
  };

  let generateNeighbors = function generateNeighbors(node, index = 0, neighbors = [node], neighborCoordinates = [node.coordinate]) {
    // if (index == neighbors.length) return;
    if (index == neighbors.length)
    {
      console.log(neighbors.length);
      return;
    }

    index++;

    KnightMoves.forEach(function generateNode(move) {
      const newCoordinate = combineCoordinates(move, node.coordinate);

      if (!isValidCoordinate) return;
      const coordinateIndex = neighborCoordinates.indexOf(newCoordinate);

      let neighbor;
      if (coordinateIndex >= 0)
      {
        neighbor = neighbors[coordinateIndex];
      } else {
        neighbor = Node(newCoordinate);
        neighbors.push(neighbor);
        neighborCoordinates.push(newCoordinate);
      }

      node.addNeighbor(neighbor);
      neighbor.addNeighbor(node);
    });

    generateNeighbors(neighbors[index], index, neighbors, neighborCoordinates);
  };

  const combineCoordinates = function combineCoordinates(arr1, arr2) {
    return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
  };

  const isValidCoordinate = function isValidCoordinate(coordinate) {
    if (coordinate[0] < 0 || coordinate[0] > 7) return false
    else if (coordinate[1] < 0 || coordinate[1] > 7) return false;
    return true;
  }

  return generateBoard();
}

module.exports = Board;