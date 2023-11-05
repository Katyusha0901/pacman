import { dataStorage } from "./dataStorage.js";

export function updateGameStatusLose() {
  if (
    dataStorage.pacman.x === dataStorage.ghost.x &&
    dataStorage.pacman.y === dataStorage.ghost.y
  ) {
    dataStorage.gameStatus = "lose";
  }
  return;
}
