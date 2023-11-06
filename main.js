import { displayBoard } from "./drawGameBoard.js";
import { movePacman } from "./pacmanFunctionality.js";
import { dotsFunctionality } from "./dotsFunctionality.js";
import { updateScore } from "./scoreFunctionality.js";
import { updateGameStatus } from "./gameStatusFunctionality.js";
import { dataStorage } from "./dataStorage.js";

export function circle() {
  displayBoard();
  movePacman();
  updateGameStatus();
  updateGameStatus();
  updateScore();
  dotsFunctionality()
  setTimeout(circle, 1000);
}

circle();
