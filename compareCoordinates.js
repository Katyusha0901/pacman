import { dataStorage } from "./dataStorage.js";

export function compareCoordinates() {
  if (
    dataStorage.pacman.x !== dataStorage.ghost.x &&
    dataStorage.pacman.y !== dataStorage.ghost.y
  ) {
    return
  }
}
