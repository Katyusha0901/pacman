import { dataStorage } from "./dataStorage.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);

export function drawPacman() {
  cells[(dataStorage.pacman.y - 1) * 8 + dataStorage.pacman.x].classList.add(
    "pacman"
  );
}

export function drawGhost() {
  cells[(dataStorage.ghost.y - 1) * 8 + dataStorage.ghost.x].classList.add(
    "ghost"
  );
}

export function drawBarriers() {
  dataStorage.barriers.forEach((coordinates) => {
    cells[(coordinates.y - 1) * 8 + coordinates.x].classList.add("barriers");
  });
}
