import { drawGameBoard } from "./drawGameBoard.js";
import { movePacman } from "./pacmanFunctionality.js";
import { updateScore } from "./updateScore.js";
import { updateGameStatus } from "./gameStatusFunctionality.js";
import { moveGhost } from "./ghost/moveGhost.js";
import { changeDirection } from "./ghost/changeDirection.js";

export function circle() {
  movePacman();
  moveGhost()
  updateGameStatus();
  updateScore();
  drawGameBoard();
  setTimeout(circle, 1000);
}
drawGameBoard();
setTimeout(circle, 1000);
