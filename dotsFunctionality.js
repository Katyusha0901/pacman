import { dataStorage } from "./dataStorage.js";

export function dotsFunctionality() {
  dataStorage.dots.forEach((coordinates) => {
    const index = dataStorage.dots.indexOf(coordinates);
    if (
      dataStorage.pacman.x === coordinates.x &&
      dataStorage.pacman.y === coordinates.y
    ) {
      dataStorage.dots.splice(index, 1);
    }
  });
}
