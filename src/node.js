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

module.exports = Node;