import { dataStorage } from "./dataStorage.js";

document.addEventListener("keydown", function (event) {
  
    if (event.code == "ArrowRight") dataStorage.pacman.direction = 'right';
    if (event.code == "ArrowLeft") dataStorage.pacman.direction = 'left';
    if (event.code == "ArrowUp") dataStorage.pacman.direction = 'up';
    if (event.code == "ArrowDown") dataStorage.pacman.direction = 'down';
});

