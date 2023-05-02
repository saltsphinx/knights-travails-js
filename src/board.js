const Node = require('./node');
const Coordinates = require('./Coordinates');
const Moves = require('./Moves');

const Board = function BoardFactory() {
  const generateBoard = function generateBoard()
  {
    
    const nodes = {};

    Coordinates.forEach(function generateNodes(coordinate) {
      const node = Node(coordinate);

      Moves.forEach(function addNeighbors(move) {
        const neighborCoordinate = combineCoordinates(coordinate, move);

        if (!isValidCoordinate(neighborCoordinate)) return;
        const neighbor = nodes[neighborCoordinate.toString()];

        if (!neighbor) return;
        node.addNeighbor(neighbor);
        neighbor.addNeighbor(node);
      });

      nodes[node.coordinate.toString()] = node;
    });

    return nodes;
  }

  const compareCoordinates = function compareCoordinates(arr1) {
    return (arr2) => {
      if (arr1[0] == arr2[0] && arr1[1] == arr2[1]) return true;
      return false;
    }
  }

  const combineCoordinates = function combineCoordinates(arr1, arr2) {
    return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
  };

  const isValidCoordinate = function isValidCoordinate(coordinate) {
    if (coordinate[0] >= 0 && coordinate[0] <= 7)
    {
      if (coordinate[1] >= 0 && coordinate[1] <= 7)
      {
        return true;
      }
    }

    return false;
  }

  return generateBoard();
}

module.exports = Board;