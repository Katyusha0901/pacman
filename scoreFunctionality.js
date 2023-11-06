import { dataStorage } from "./dataStorage.js";

export function updateScore() {
  dataStorage.dots.forEach((coordinates) => {
    if (
      dataStorage.pacman.x === coordinates.x &&
      dataStorage.pacman.y === coordinates.y
    ) {
      dataStorage.score = dataStorage.score + 1;
    }
  });
}
