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
  return deltas;
}

function getCoordinates() {
  let deltasForGetCoordinates = getDeltas();
  return {
    forwardCell: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.forward.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.forward.y,
    },
    leftCell: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.left.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.left.y,
    },
    rightCell: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.right.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.right.y,
    },
  };
}

function isThereWall() {
  dataStorage.barriers.forEach((coordinates) => {
    if (
      getCoordinates.forwardCell.x === coordinates.x &&
      getCoordinates.forwardCell.y === coordinates.y
    ) {
      return;
    } else if (
      getCoordinates.leftCell.x === coordinates.x &&
      getCoordinates.leftCell.y === coordinates.y
    ) {
      return;
    } else if (
      getCoordinates.rightCell.x === coordinates.x &&
      getCoordinates.rightCell.y === coordinates.y
    ) {
      return;
    }
  });
}

function isOutOfBounds() {
  if (
    getCoordinates.forwardCell.x < 1 ||
    getCoordinates.forwardCell.x > 8 ||
    getCoordinates.forwardCell.y < 1 ||
    getCoordinates.forwardCell.y > 8
  ) {
    return;
  } else if (
    getCoordinates.leftCell.x < 1 ||
    getCoordinates.leftCell.x > 8 ||
    getCoordinates.leftCell.y < 1 ||
    getCoordinates.leftCell.y > 8
  ) {
    return;
  } else if (
    getCoordinates.rightCell.x < 1 ||
    getCoordinates.rightCell.x > 8 ||
    getCoordinates.rightCell.y < 1 ||
    getCoordinates.rightCell.y > 8
  ) {
    return;
  }
}

function checkAvailability() {
  isThereWall();
  isOutOfBounds();
}



getDeltas();
