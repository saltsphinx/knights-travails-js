const { Node, validateCoord } = require('./Node');

const knightMoves = function knightMoves(start, end) {
  if (!validateCoord(start) || !validateCoord(end)) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');

  const discovered = {};
  let current = Node(start);
  let path;
  discovered[start] = current;

  for (let i = 0; i < Object.values(discovered).length; i++) {
    if (current.coord.toString() == end) {
      path = pathBuilder(current);
      break;
    }

    current.moves.forEach((move) => {
      if (discovered[move]) return;
      discovered[move] = Node(move, current);
    });

    current = Object.values(discovered)[i];
  }

  if (!path) path = checkLastMove(discovered, end);
  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  path.reverse().forEach((coord) => console.log(`[${coord[0]}, ${coord[1]}]`));
};

const pathBuilder = function pathBuilder(node) {
  const path = [node.coord];
  let current = node;

  while (current.parent)
  {
    path.push(current.parent.coord);
    current = current.parent;
  }

  return path;
}

const checkLastMove = function checkLastMove(discovered, end) {
  const values = Object.values(discovered);

  if (values[values.length - 1].coord.toString() == end) return pathBuilder(values[values.length - 1]);
}

module.exports = knightMoves;