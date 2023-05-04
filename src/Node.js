const Moves = require('./Moves');

const Node = function NodeFactory(coord, parent) {
  if (!validateCoord(coord)) return;
  return {
    coord,
    parent,
    moves: generateMoves(coord),
  };
};

const generateMoves = function generateMoves(coord) {
  const moves = [];

  Moves.forEach((move) => {
    const newMove = addCoords(move, coord);
    if (newMove) moves.push(newMove);
  });

  return moves;
};

const addCoords = function addCoords(coord1, coord2) {
  const coord = [coord1[0] + coord2[0], coord1[1] + coord2[1]];
  if (validateCoord(coord)) return coord;
};

const validateCoord = function validateCoord(coord) {
  if (coord[0] >= 0 && coord[0] <= 7) {
    if (coord[1] >= 0 && coord[1] <= 7) return coord;
  }
};

module.exports = {
  Node,
  validateCoord,
};