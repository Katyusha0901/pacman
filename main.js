import { displayBoard } from "./drawGameBoard.js";
import { movePacman } from "./pacmanFunctionality.js";
import { dotsFunctionality } from "./dotsFunctionality.js";
import { updateScore } from "./scoreFunctionality.js";
import { updateGameStatusLose } from "./gameStatusFunctionality.js";
import { updateGameStatusWin } from "./gameStatusFunctionality.js";

export function circle() {
  displayBoard();
  movePacman();
  updateGameStatusLose();
  updateGameStatusWin();
  updateScore();
  dotsFunctionality()

  setTimeout(circle, 1000);
}

circle();
