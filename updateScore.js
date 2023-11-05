import { dataStorage } from "./dataStorage.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);
export function updateScore() {
  if (
    cells[(dataStorage.pacman.y - 1) * 8 + (dataStorage.pacman.x - 1)].classList.contains(
      "dots"
    )
  ) {
    dataStorage.score = dataStorage.score 
   }
}

