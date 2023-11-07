import { dataStorage } from "./dataStorage.js";
const cellsPseudoArray = document.querySelectorAll(".wrapper__gameBoard > div");
const cells = Array.from(cellsPseudoArray);

export function drawGameBoard() {
  let pacmanIndex = (dataStorage.pacman.y - 1) * 8 + (dataStorage.pacman.x - 1);
  let ghostIndex = (dataStorage.ghost.y - 1) * 8 + (dataStorage.ghost.x - 1);
  
  cells.forEach((cell) => {
    cell.classList.remove("pacman");
    cell.classList.remove("dots");
    cell.classList.remove("ghost");
    cell.classList.remove("barriers");
  });

  document.querySelector(".score").textContent = `${dataStorage.score}`;

  dataStorage.dots.forEach((coordinates) => {
    let coordinatesIndex = (coordinates.y - 1) * 8 + (coordinates.x - 1);
    cells[coordinatesIndex].classList.add("dots");
  });

  dataStorage.barriers.forEach((coordinates) => {
    let coordinatesIndex = (coordinates.y - 1) * 8 + (coordinates.x - 1);
    cells[coordinatesIndex].classList.add("barriers");
  });

  cells[pacmanIndex].classList.add("pacman");

  cells[ghostIndex].classList.remove("dots");

  cells[ghostIndex].classList.add("ghost");

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
