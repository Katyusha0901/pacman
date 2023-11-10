import { dataStorage } from "../dataStorage.js";
import { changeDirection } from "./changeDirection.js";

export function moveGhost() {
  changeDirection();
  const newCoordinates = { x: dataStorage.ghost.x, y: dataStorage.ghost.y };
  switch (dataStorage.ghost.direction) {
    case "right":
      newCoordinates.x = dataStorage.ghost.x + 1;
      break;
    case "left":
      newCoordinates.x = dataStorage.ghost.x - 1;
      break;
    case "up":
      newCoordinates.y = dataStorage.ghost.y - 1;
      break;
    case "down":
      newCoordinates.y = dataStorage.ghost.y + 1;
      break;
  }
  dataStorage.ghost.x = newCoordinates.x;
  dataStorage.ghost.y = newCoordinates.y;
}
