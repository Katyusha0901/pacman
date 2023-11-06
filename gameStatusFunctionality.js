import { dataStorage } from "./dataStorage.js";

export function updateGameStatus(){
  updateGameStatusLose()
  updateGameStatusWin()
}

export function updateGameStatusLose() {
  if (
    dataStorage.pacman.x === dataStorage.ghost.x &&
    dataStorage.pacman.y === dataStorage.ghost.y
  ) {
    dataStorage.gameStatus = "lose";
  }
  return;
}

export function updateGameStatusWin() {
  if (dataStorage.dots.length === 0) {
    dataStorage.gameStatus = "win";
  }
  return;
}
