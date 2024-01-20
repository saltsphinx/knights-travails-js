# knights-travails-js
Project provided by The Odin Project, and is the last project of the 'A Bit of Computer Science' course in their Javscript module. It's intented to put the learners knowledge of data structures and algorithms to the test. There should be an 8x8 chess board made up of nodes. The neighbors are knight pieces moves away, so variations of "2 nodes up, one to the right". There should be a main function, knightMoves, that takes two parameters. One being the starting node, and the other being the end node(where you want the knight to be). This function should output the shorest path from the start node to the end.

## assignment
1. Put together a script that creates a game board and a knight.
2. Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
3. Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:

```js
> knightMoves([3,3],[4,3])
=> You made it in 3 moves!  Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```