import { dataStorage } from "./dataStorage.js";
import { drawGameBoard } from "./drawGameBoard.js";

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowRight":
      dataStorage.pacman.direction = "right";
      break;
    case "ArrowLeft":
      dataStorage.pacman.direction = "left";
      break;

    case "ArrowUp":
      dataStorage.pacman.direction = "up";
      break;

    case "ArrowDown":
      dataStorage.pacman.direction = "down";
      break;
  }
  drawGameBoard();
});

export function movePacman() {
  const newCoordinates = { x: dataStorage.pacman.x, y: dataStorage.pacman.y };

  switch (dataStorage.pacman.direction) {
    case "right":
      newCoordinates.x = dataStorage.pacman.x + 1;
      break;
    case "left":
      newCoordinates.x = dataStorage.pacman.x - 1;
      break;
    case "up":
      newCoordinates.y = dataStorage.pacman.y - 1;
      break;
    case "down":
      newCoordinates.y = dataStorage.pacman.y + 1;
      break;
  }
  const hittingBarrier = dataStorage.barriers.some((barrier) => {
    return barrier.x === newCoordinates.x && barrier.y === newCoordinates.y;
  });

  const cameEdge =
    newCoordinates.x < 1 ||
    newCoordinates.x > 8 ||
    newCoordinates.y < 1 ||
    newCoordinates.y > 8;

  if (hittingBarrier || cameEdge) {
    return;
  }
  dataStorage.pacman.x = newCoordinates.x;
  dataStorage.pacman.y = newCoordinates.y;
}
