const GRID:number=16;
type Context = CanvasRenderingContext2D | null;
let countGame: boolean = false;

interface Snake {
  x: number;
  y: number;
  dx: number;
  dy: number;
  cells: { x: number; y: number }[];
  maxCells: number;
}

let snake: Snake = {
  x: 96,
  y: 160,
  dx: 0,
  dy: 0,
  cells: [],
  maxCells: 1,
};

interface Apple {
  x: number;
  y: number;
}

let apple: Apple = {
  x: 96,
  y: 176,
};

const speed = (): void => {
  snake.x += snake.dx;
  snake.y += snake.dy;
};

const extension = (): void => {
  snake.cells.unshift({ x: snake.x, y: snake.y });
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
};

const spawnSnake = (context:Context): void => {
  if(context!==null && context !==undefined){
  for (let i = 0; i < snake.cells.length; i++) {
    if (i === 0) {
      context.fillStyle = "black";
    } else {
      context.fillStyle = "green";
    }
    context.fillRect(snake.cells[i].x, snake.cells[i].y, GRID - 1, GRID - 1);
  }
}
};

const death = (): void => {
  snake.dx = 0;
  snake.dy = 0;
  clearInterval(gameLoop);
  countGame = true;
};

const eatApple = (): void => {
  snake.cells.forEach((cell) => {
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      apple.x = rand(2, 7) * GRID;
      apple.y = rand(3, 6) * GRID;
    }
  });
};

const deathAboutYourself = (): void => {
  snake.cells.forEach((cell, index) => {
    for (let i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        death();
      }
    }
  });
};

const spawnPic = (path: string, x: number, y: number, length: number, width: number, context: Context): void => {
  if(context!==null && context !== undefined){
  let img = new Image();
  img.src = path;
  context.drawImage(img, x, y, length, width);
  }
};


export const restart = (): void => {
  if (countGame) {
    countGame = false;
    snake.x = 96;
    snake.y = 160;
    apple.x = rand(2, 7) * GRID;
    apple.y = rand(3, 6) * GRID;
    snake.cells = [];
    snake.maxCells = 1;
    gameLoop = setInterval(loop, 400);
  }
};

const checkEdge = (): void => {
  switch (true) {
    case snake.x < 16:
      snake.cells.forEach((elem)=> {elem.x += GRID})
      death();
      break;

    case snake.y < 48:
      snake.cells.forEach((elem)=> {elem.y += GRID})
      death();
      break;

    case snake.x > 272:
      snake.cells.forEach((elem)=> {elem.x -= GRID})
      death();
      break;

    case snake.y > 272:
      snake.cells.forEach((elem)=> {elem.y -= GRID})
      death();
      break;
  }
};

export const control = (direction: string): void => {
  if (!countGame) {
    switch (direction) {
      case "left":
        snake.dx = -GRID;
        snake.dy = 0;
        break;

      case "down":
        snake.dy = -GRID;
        snake.dx = 0;
        break;

      case "right":
        snake.dx = GRID;
        snake.dy = 0;
        break;

      case "up":
        snake.dy = GRID;
        snake.dx = 0;
        break;
    }
  }
};

const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const loop = (context:Context): void => {
  spawnPic("src/assets/snake/ground.png", 0, 0, 300, 300, context);
  spawnPic(`src/assets/snake/fruit.png`, apple.x, apple.y, GRID - 1, GRID - 1, context);
  spawnSnake(context);
  eatApple();
  deathAboutYourself();
  speed();
  extension();
  checkEdge();
};

let gameLoop: number = setInterval(loop, 400);