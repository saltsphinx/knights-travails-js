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

/***/ "./src/Moves.js":
/*!**********************!*\
  !*** ./src/Moves.js ***!
  \**********************/
/***/ ((module) => {

eval("let Moves = [\n  [-1, 2],\n  [1, 2],\n  [-1, -2],\n  [1, -2],\n  [2, 1],\n  [2, -1],\n  [-2, 1],\n  [-2, -1],\n]\n\nmodule.exports = Moves;\n\n//# sourceURL=webpack://knights-travails/./src/Moves.js?");

/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Moves = __webpack_require__(/*! ./Moves */ \"./src/Moves.js\");\n\nconst Node = function NodeFactory(coord, parent) {\n  if (!validateCoord(coord)) return;\n  return {\n    coord,\n    parent,\n    moves: generateMoves(coord),\n  };\n};\n\nconst generateMoves = function generateMoves(coord) {\n  const moves = [];\n\n  Moves.forEach((move) => {\n    const newMove = addCoords(move, coord);\n    if (newMove) moves.push(newMove);\n  });\n\n  return moves;\n};\n\nconst addCoords = function addCoords(coord1, coord2) {\n  const coord = [coord1[0] + coord2[0], coord1[1] + coord2[1]];\n  if (validateCoord(coord)) return coord;\n};\n\nconst validateCoord = function validateCoord(coord) {\n  if (coord[0] >= 0 && coord[0] <= 7) {\n    if (coord[1] >= 0 && coord[1] <= 7) return coord;\n  }\n};\n\nmodule.exports = {\n  Node,\n  validateCoord,\n};\n\n//# sourceURL=webpack://knights-travails/./src/Node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const knightMoves = __webpack_require__(/*! ./knightMoves */ \"./src/knightMoves.js\");\n\nknightMoves([0, 0], [7, 7]);\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Node, validateCoord } = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\nconst knightMoves = function knightMoves(start, end) {\n  if (!validateCoord(start) || !validateCoord(end)) throw new Error('Coordinates outside of bounds. Min: [0, 0], Max: [7, 7]');\n\n  const discovered = {};\n  let current = Node(start);\n  let path;\n  discovered[start] = current;\n\n  for (let i = 0; i < Object.values(discovered).length; i++) {\n    if (current.coord.toString() == end)\n    {\n      path = pathBuilder(current);\n      break;\n    }\n\n    current.moves.forEach((move) => {\n      if (discovered[move]) return;\n      discovered[move] = Node(move, current);\n    })\n\n    current = Object.values(discovered)[i];\n  }\n\n  if (!path) path = checkLastMove(discovered, end);\n  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);\n  path.reverse().forEach((coord) => console.log(`[${coord[0]}, ${coord[1]}]`));\n};\n\nconst pathBuilder = function pathBuilder(node) {\n  const path = [node.coord];\n  let current = node;\n\n  while (current.parent)\n  {\n    path.push(current.parent.coord);\n    current = current.parent;\n  }\n\n  return path;\n}\n\nconst checkLastMove = function checkLastMove(discovered, end) {\n  const values = Object.values(discovered);\n\n  if (values[values.length - 1].coord.toString() == end) return pathBuilder(values[values.length - 1]);\n}\n\nmodule.exports = knightMoves;\n\n//# sourceURL=webpack://knights-travails/./src/knightMoves.js?");

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