import { drawGameBoard } from "./drawGameBoard.js";
import { movePacman } from "./pacmanFunctionality.js";
import { updateScore } from "./updateScore.js";
import { updateGameStatus } from "./gameStatusFunctionality.js";

export function circle() {
  movePacman();
  updateGameStatus();
  updateScore();
  drawGameBoard();
  setTimeout(circle, 1000);
}
drawGameBoard();
setTimeout(circle, 1000);
