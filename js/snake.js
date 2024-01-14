export class Snake {
  constructor(snakeBody, board) {
    this.snakeBody = snakeBody;
    this.color = "hsl(200, 100%, 50%)";
    this.board = board;
  }

  update() {}

  plot() {
    this.checkColor();
    this.snakeBody.forEach((element) => {
      const div = document.createElement("div");
      div.style.gridRowStart = element.y;
      div.style.gridColumnStart = element.x;
      div.style.backgroundColor = element.color;
      div.classList.add("snake");

      this.board.appendChild(div);
    });
  }

  move(direction) {
    const oldSnake = document.querySelectorAll(".snake");
    oldSnake.forEach((el) => {
      el.remove();
    });
    if (direction.x != 0 && direction.y != 0) {
      console.log("poink");
      const newHead = { x: this.snakeBody[0].x + direction.x, y: this.snakeBody[0].y + direction.y };
      this.snakeBody.unshift(newHead);
      this.snakeBody.pop();
    }
  }

  checkColor() {
    let clr = 200;
    this.snakeBody.forEach((segment) => {
      clr -= 5;
      if (!segment.color) {
        segment.color = `hsl(${clr}, 100%, 50%)`;
      }
    });
  }
}
