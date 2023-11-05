import { dataStorage } from "./dataStorage.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);

export function displayBoard() {
  cells.forEach((cell) => {
    cell.classList.remove("pacman");
    cell.classList.remove("ghost");
    cell.classList.remove("barriers");
  });

  cells[
    (dataStorage.pacman.y - 1) * 8 + (dataStorage.pacman.x - 1)
  ].classList.add("pacman");

  cells[
    (dataStorage.pacman.y - 1) * 8 + (dataStorage.pacman.x - 1)
  ].classList.remove("dots");

  cells[
    (dataStorage.ghost.y - 1) * 8 + (dataStorage.ghost.x - 1)
  ].classList.add("ghost");
  cells[
    (dataStorage.ghost.y - 1) * 8 + (dataStorage.ghost.x - 1)
  ].classList.remove("dots");

  dataStorage.barriers.forEach((coordinates) => {
    cells[(coordinates.y - 1) * 8 + (coordinates.x - 1)].classList.add(
      "barriers"
    );
  });
}

export function showScore(){
  document.querySelector('.score').append(`${dataStorage.score}`)
}