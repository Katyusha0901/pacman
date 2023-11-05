import { dataStorage } from "./dataStorage.js";

export function processGameStatus() {
  switch (dataStorage.gameStatus) {
    case "lose":
      document.querySelector(".gameStatusLost").style.display = "flex";
      break;
    case "win":
      document.querySelector(".gameStatusWin").style.display = "flex";
      break;
  }
}
