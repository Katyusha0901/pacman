import { dataStorage } from "./dataStorage.js";

export function updateScore() {
  dataStorage.dots.forEach((coordinates) => {
    const index = dataStorage.dots.indexOf(coordinates);
    if (
      dataStorage.pacman.x === coordinates.x &&
      dataStorage.pacman.y === coordinates.y
    ) {
      dataStorage.dots.splice(index, 1);
      dataStorage.score = dataStorage.score + 1;
    }
  });
}
