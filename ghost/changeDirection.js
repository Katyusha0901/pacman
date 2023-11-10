import { dataStorage } from "../dataStorage.js";
import { canMoveForward } from "./checkGhostSurroudings.js";
import { canTurn } from "./checkGhostSurroudings.js";
import { canTurnRight } from "./checkGhostSurroudings.js";
import { canTurnLeft } from "./checkGhostSurroudings.js";

export function changeDirection() {
  console.log(canMoveForward());
  if (!canMoveForward() && canTurn()) {
    turn();
  } else if (!canMoveForward() & !canTurn()) {
    back();
  } else if (canMoveForward() && canTurn()) {
    turnWithProbability();
  } else if (canMoveForward() && !canTurn()) {
    dataStorage.ghost.direction = dataStorage.ghost.direction;
  }
}

function turn() {
  if (dataStorage.ghost.direction === "down" && canTurnRight()) {
    dataStorage.ghost.direction = "left";
  } else if (dataStorage.ghost.direction === "down" && canTurnLeft()) {
    dataStorage.ghost.direction = "right";
  } else if (dataStorage.ghost.direction === "up" && canTurnRight()) {
    dataStorage.ghost.direction = "right";
  } else if (dataStorage.ghost.direction === "up" && canTurnLeft()) {
    dataStorage.ghost.direction = "left";
  } else if (dataStorage.ghost.direction === "right" && canTurnRight()) {
    dataStorage.ghost.direction = "down";
  } else if (dataStorage.ghost.direction === "right" && canTurnLeft()) {
    dataStorage.ghost.direction = "up";
  } else if (dataStorage.ghost.direction === "left" && canTurnRight()) {
    dataStorage.ghost.direction = "up";
  } else if (dataStorage.ghost.direction === "left" && canTurnLeft()) {
    dataStorage.ghost.direction = "down";
  }
}

function back() {
  switch (dataStorage.ghost.direction) {
    case "down":
      dataStorage.ghost.direction = "up";
      break;
    case "up":
      dataStorage.ghost.direction = "down";
      break;
    case "right":
      dataStorage.ghost.direction = "left";
      break;
    case "left":
      dataStorage.ghost.direction = "right";
      break;
  }
}

function turnWithProbability() {
  switch (dataStorage.ghost.direction) {
    case "down":
      dataStorage.ghost.direction = turnLeftOrRightProbability();
      break;
    case "up":
      dataStorage.ghost.direction = turnLeftOrRightProbability();
      break;
    case "right":
      dataStorage.ghost.direction = ternUpOrDownProbability();
      break;
    case "left":
      dataStorage.ghost.direction = ternUpOrDownProbability();
      break;
  }
}

function turnLeftOrRightProbability() {
  const sides = ["right", "left"];
  return sides[Math.floor(Math.random() * sides.length)];
}

function ternUpOrDownProbability() {
  const sides = ["up", "down"];
  return sides[Math.floor(Math.random() * sides.length)];
}

// console.log(dataStorage.ghost.direction);
changeDirection();
