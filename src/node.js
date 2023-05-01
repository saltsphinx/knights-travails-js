const Node = function NodeFactory(value) {
  const addNeighbor = function addNeighbor(neighbor) {
    const neighbors = Array.from(this);

    if (neighbors.includes(neighbor)) return;

    this[this.length] = neighbor;
    this.length++;
    return this.length;
  }

  return {
    addNeighbor,
    value,
    length: 0,
   };
}

module.exports = Node;