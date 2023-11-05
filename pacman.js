import { displayBoard } from "./drawGameBoard.js";
import { movePacman } from "./newCoordinatesForPacman.js";
import { updateScore } from "./updateScore.js";
import { showScore } from "./drawGameBoard.js";
import { updateGameStatusLose } from "./updateGameStatusLose.js";
import { processGameStatus } from "./processGameStatus.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);

export function circle() {
  showScore()

  displayBoard();
  movePacman();
  processGameStatus();
  updateGameStatusLose();
  updateScore()

  setTimeout(circle, 1000);
}

export function drawDots() {
  cells.forEach((cell) => {
    if (
      cell.classList.contains("pacman") ||
      cell.classList.contains("ghost") ||
      cell.classList.contains("barriers")
    ) {
      cell.classList.remove("dots");
    } else {
      cell.classList.add("dots");
    }
  });
}
drawDots();
circle();