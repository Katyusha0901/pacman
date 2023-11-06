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

export function movePacman() {
  let newCoordinates = { x: dataStorage.pacman.x, y: dataStorage.pacman.y };

  switch (dataStorage.pacman.direction) {
    case "right":
      newCoordinates.x = dataStorage.pacman.x + 1;
      document.querySelector(".pacman").style.transform = "none";
      break;
    case "left":
      newCoordinates.x = dataStorage.pacman.x - 1;
      document.querySelector(".pacman").style.transform = "none";
      document.querySelector(".pacman").style.transform = "scalex(-1)";

      break;

    case "up":
      newCoordinates.y = dataStorage.pacman.y - 1;
      document.querySelector(".pacman").style.transform = "rotate(0.75turn)";
      break;

    case "down":
      (newCoordinates.y = dataStorage.pacman.y + 1),
        (document.querySelector(".pacman").style.transform =
          "rotate(0.25turn)");
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
