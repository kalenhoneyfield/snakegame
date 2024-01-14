import { Snake } from "./snake.js";
import { getInputDirection } from "./controller.js";

const GAMEBOARD = document.getElementById("game-board");

const testSnake = [
  { x: 21, y: 21 },
  { x: 21, y: 22 },
  { x: 21, y: 23 },
  { x: 21, y: 24 },
  { x: 21, y: 25 },
];
const worm = new Snake(testSnake, GAMEBOARD);

let lastRenderTime = 0;

// worm.plot();
// worm.snakeBody = [{ x: 100, y: 100 }];
// worm.plot();
// worm.move({ x: 1, y: 0 });
// worm.plot();

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / 2) return;
  lastRenderTime = currentTime;
  worm.plot();
  //   worm.move(getInputDirection());
  //   console.log(getInputDirection());
}
window.requestAnimationFrame(main);

console.log(worm.snakeBody);
