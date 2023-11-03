import { dataStorage } from "./dataStorage.js";

export function calculateCoordinates() {
  let newCoordinates = { x: dataStorage.pacman.x, y: dataStorage.pacman.y };
  switch (dataStorage.pacman.direction) {
    case "right":
      newCoordinates.x = dataStorage.pacman.x + 1;
    case "left":
      newCoordinates.x = dataStorage.pacman.x - 1;
    case "up":
      newCoordinates.y = dataStorage.pacman.y + 1;
    case "down":
      newCoordinates.y = dataStorage.pacman.y - 1;
  }

  const hittingBarrier = dataStorage.barriers.some((barrier) => {
    return barrier.x === newCoordinates.x && barrier.y === newCoordinates.y;
  });

  if (hittingBarrier) {
    return;
  }
  dataStorage.pacman.x = newCoordinates.x;
  dataStorage.pacman.y = newCoordinates.y;
}

