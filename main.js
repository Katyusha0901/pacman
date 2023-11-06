import { displayBoard } from "./drawGameBoard.js";
import { showDots } from "./drawGameBoard.js";
import { movePacman } from "./functionalityForPacman.js";
import { updateScore } from "./updateScore.js";
import { updateGameStatusLose } from "./updateGameStatus.js";
import { updateGameStatusWin } from "./updateGameStatus.js";

export function circle() {
  displayBoard();
  movePacman();
  updateGameStatusLose();
  updateGameStatusWin();
  updateScore();

  setTimeout(circle, 1000);
}

showDots();
circle();
