/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Coordinates.js":
/*!****************************!*\
  !*** ./src/Coordinates.js ***!
  \****************************/
/***/ ((module) => {

eval("const Coordinates = function Coordinates() {\n  const coordinates = [];\n\n  for (let rowIndex = 0; rowIndex <= 7; rowIndex++)\n  {\n    for (let columnIndex = 0; columnIndex <= 7; columnIndex++)\n    {\n      coordinates.push([rowIndex, columnIndex]);\n    }\n  }\n\n  return coordinates\n}\n\nmodule.exports = Coordinates();\n\n//# sourceURL=webpack://knights-travails/./src/Coordinates.js?");

/***/ }),

/***/ "./src/Moves.js":
/*!**********************!*\
  !*** ./src/Moves.js ***!
  \**********************/
/***/ ((module) => {

eval("const Moves = [\n  [-1, 2],\n  [1, 2],\n  [-1, -2],\n  [1, -2]\n  [2, 1],\n  [2, -1],\n  [-2, 1],\n  [-2, -1],\n]\n\nmodule.exports = Moves;\n\n//# sourceURL=webpack://knights-travails/./src/Moves.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Node = __webpack_require__(/*! ./node */ \"./src/node.js\");\nconst Coordinates = __webpack_require__(/*! ./Coordinates */ \"./src/Coordinates.js\");\nconst Moves = __webpack_require__(/*! ./Moves */ \"./src/Moves.js\");\n\nconst Board = function BoardFactory() {\n  const generateBoard = function generateBoard()\n  {\n    \n    const nodes = {};\n\n    Coordinates.forEach(function generateNodes(coordinate) {\n      const node = Node(coordinate);\n\n      Moves.forEach(function addNeighbors(move) {\n        const neighborCoordinate = combineCoordinates(coordinate, move);\n\n        if (!isValidCoordinate(neighborCoordinate)) return;\n        const neighbor = nodes[neighborCoordinate.toString()];\n\n        if (!neighbor) return;\n        node.addNeighbor(neighbor);\n        neighbor.addNeighbor(node);\n      });\n\n      nodes[node.coordinate.toString()] = node;\n    });\n\n    return nodes;\n  }\n\n  const compareCoordinates = function compareCoordinates(arr1) {\n    return (arr2) => {\n      if (arr1[0] == arr2[0] && arr1[1] == arr2[1]) return true;\n      return false;\n    }\n  }\n\n  const combineCoordinates = function combineCoordinates(arr1, arr2) {\n    return [arr1[0] + arr2[0], arr1[1] + arr2[1]];\n  };\n\n  const isValidCoordinate = function isValidCoordinate(coordinate) {\n    if (coordinate[0] >= 0 && coordinate[0] <= 7)\n    {\n      if (coordinate[1] >= 0 && coordinate[1] <= 7)\n      {\n        return true;\n      }\n    }\n\n    return false;\n  }\n\n  return generateBoard();\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack://knights-travails/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const knightMoves = __webpack_require__(/*! ./knightMoves */ \"./src/knightMoves.js\");\n\nconsole.log(knightMoves([5, 5]));\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst graph = Board();\n\nconst knightMoves = function knightMoves(start, end) {\n  const [knight, destination] = [graph[start], graph[end]];\n\n  if (!knight || !destination) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');\n  const shortestPath = traverseGraph(knight, destination);\n  console.log(`You made it in ${shortestPath.length} moves! Heres your path:`);\n\n  shortestPath.forEach((node) => console.log(node.coordinate));\n};\n\nconst traverseGraph = function traverseGraph(knight, destination, path = [knight.coordinate.toString()]) {\n  \n}\n\nconst knightsTour = function knightsTour(start) {\n  const knight = graph[start];\n\n  if (!knight) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');\n  const visitedNeigbors = [knight];\n  let traversing = true;\n\n  while (traversing)\n  {\n    const neighbors = Array.from(visitedNeigbors[visitedNeigbors.length - 1]);\n    for (let i = 0; i < neighbors.length; i++)\n    {\n      const neighbor = neighbors[i];\n\n      if (!visitedNeigbors.includes(neighbor))\n      {\n        visitedNeigbors.push(neighbor);\n        break;\n      }\n      if (i == neighbors.length - 1) traversing = false;\n    }\n  }\n\n  return visitedNeigbors;\n}\n\nmodule.exports = knightsTour;\n\n//# sourceURL=webpack://knights-travails/./src/knightMoves.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((module) => {

eval("const Node = function NodeFactory(coordinate) {\n  const addNeighbor = function addNeighbor(neighbor) {\n    const neighbors = Array.from(this);\n\n    if (neighbors.includes(neighbor)) return;\n    this[this.length] = neighbor;\n    this.length++;\n    return this.length;\n  }\n\n  return {\n    addNeighbor,\n    coordinate,\n    length: 0,\n   };\n};\n\nmodule.exports = Node;\n\n//# sourceURL=webpack://knights-travails/./src/node.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;