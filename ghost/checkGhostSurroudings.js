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

export function getCoordinates() {
  let deltasForGetCoordinates = getDeltas();
  return {
    forward: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.forward.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.forward.y,
    },
    left: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.left.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.left.y,
    },
    right: {
      x: dataStorage.ghost.x + deltasForGetCoordinates.right.x,
      y: dataStorage.ghost.y + deltasForGetCoordinates.right.y,
    },
  };
}

function isThereWall(coordinates) {
  return dataStorage.barriers.some((barrier) => {
    return barrier.x === coordinates.x && barrier.y === coordinates.y;
  });
}

function isOutOfBounds(coordinates) {
  return (
    coordinates.x < 1 ||
    coordinates.x > 8 ||
    coordinates.y < 1 ||
    coordinates.y > 8
  );
}

function checkAvailability(coordinates) {
  return isOutOfBounds(coordinates), isThereWall(coordinates);
}

getDeltas();
canMoveForward();
canTurnRight();
canTurnLeft();

export function canMoveForward() {
  return checkAvailability(getCoordinates().forward);
}

export function canTurn() {
  return canTurnRight(), canTurnLeft();
}

export function canTurnRight() {
  return checkAvailability(getCoordinates().right);
}

export function canTurnLeft() {
  return checkAvailability(getCoordinates().left);
}
