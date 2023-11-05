import { dataStorage } from "./dataStorage.js";

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
});
