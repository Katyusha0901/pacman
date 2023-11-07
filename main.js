import { displayBoard } from "./drawGameBoard.js";
import { movePacman } from "./pacmanFunctionality.js";
import { updateScore } from "./updateScore.js";
import { updateGameStatus } from "./gameStatusFunctionality.js";

export function circle() {
  displayBoard();
  movePacman();
  updateGameStatus();
  updateScore();
  setTimeout(circle, 1000);
}

circle();
