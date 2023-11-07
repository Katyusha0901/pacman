import { dataStorage } from "../dataStorage.js";

export function getDeltas() {
  let deltas = {};
  switch (dataStorage.ghost.direction) {
    case "up":
      deltas = {
        forward: { x: 0, y: -1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      };
      break;
    case "down":
      deltas = {
        forward: { x: 0, y: +1 },
        left: { x: 1, y: 0 },
        right: { x: -1, y: 0 },
      };
      break;
    case "left":
      deltas = {
        forward: { x: -1, y: 0 },
        left: { x: 0, y: -1 },
        right: { x: 0, y: 1 },
      };
      break;
    case "right":
      deltas = {
        forward: { x: 1, y: 0 },
        left: { x: 0, y: -1 },
        right: { x: 0, y: +1 },
      };
      break;
  }
  console.log(dataStorage.ghost.direction)
  console.log(deltas);
}

getDeltas();
