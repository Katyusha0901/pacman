import { dataStorage } from "./dataStorage.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);

export function displayBoard() {
  cells.forEach((cell) => {
    cell.classList.remove("pacman");
    cell.classList.remove("dots");
    cell.classList.remove("ghost");
    cell.classList.remove("barriers");
  });

  document.querySelector(".score").textContent = `${dataStorage.score}`;

  dataStorage.dots.forEach((coordinates) => {
    cells[(coordinates.y - 1) * 8 + (coordinates.x - 1)].classList.add("dots");
  });

  dataStorage.barriers.forEach((coordinates) => {
    cells[(coordinates.y - 1) * 8 + (coordinates.x - 1)].classList.add(
      "barriers"
    );
  });

  cells[
    (dataStorage.pacman.y - 1) * 8 + (dataStorage.pacman.x - 1)
  ].classList.add("pacman");

  cells[
    (dataStorage.ghost.y - 1) * 8 + (dataStorage.ghost.x - 1)
  ].classList.add("ghost");

  switch (dataStorage.pacman.direction) {
    case "right":
      document.querySelector(".pacman").style.transform = "none";
      break;
    case "left":
      document.querySelector(".pacman").style.transform = "none";
      document.querySelector(".pacman").style.transform = "scalex(-1)";
      break;

    case "up":
      document.querySelector(".pacman").style.transform = "rotate(0.75turn)";
      break;

    case "down":
      document.querySelector(".pacman").style.transform = "rotate(0.25turn)";
      break;
  }

  switch (dataStorage.gameStatus) {
    case "lose":
      document.querySelector(".gameStatusLost").style.display = "flex";
      break;
    case "win":
      document.querySelector(".gameStatusWin").style.display = "flex";
      break;
  }
}
