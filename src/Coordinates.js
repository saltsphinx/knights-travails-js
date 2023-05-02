const Coordinates = function Coordinates() {
  const coordinates = [];

  for (let rowIndex = 0; rowIndex <= 7; rowIndex++)
  {
    for (let columnIndex = 0; columnIndex <= 7; columnIndex++)
    {
      coordinates.push([rowIndex, columnIndex]);
    }
  }

  return coordinates
}

module.exports = Coordinates();