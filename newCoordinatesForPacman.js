import { dataStorage } from "./dataStorage.js";

export function movePacman() {
  let newCoordinates = { x: dataStorage.pacman.x, y: dataStorage.pacman.y };

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
