function test(coordinate = [0, 0]) {
  const KnightMoves = [
    [-1, 2],
    [1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ]

	const combineCoordinates = function combineCoordinates(arr1, arr2) {
    return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
  };

  const isValidCoordinate = function isValidCoordinate(coordinate) {
    if (coordinate[0] < 0 || coordinate[0] > 7) return false
    else if (coordinate[1] < 0 || coordinate[1] > 7) return false;
    return true;
  }

  const Node = function NodeFactory(coordinate) {
    const addNeighbor = function addNeighbor(neighbor) {
      const neighbors = Array.from(this);

      if (neighbors.includes(neighbor)) return;

      this[this.length] = neighbor;
      this.length++;
      return this.length;
    }

    return {
      addNeighbor,
      coordinate,
      length: 0,
     };
  };

  function knightMoves() {
    console.log(KnightMoves);
  KnightMoves.forEach(function generateNode(move) {

    const newCoordinate = combineCoordinates(move, node.coordinate);

    if (!isValidCoordinate(newCoordinate)) return;

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
}

	const node = Node(coordinate);
	const neighbors = [node];
  const neighborCoordinates = [node.coordinate];

  knightMoves();

  return node;
}

console.clear();
test();