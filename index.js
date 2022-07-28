const gameBoard = document.querySelector(".gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector(".scoreText");
const resetBtn = document.querySelector(".resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBacground = "lightgreen";
const paddle1Color = "red";
const paddle2Color = "blue";
const paddleBorder = "black";
const ballColor = "orange";
const ballBorderColor = "black";
const ballRadius = 15;
const paddleSpeed = 50;
let intevalID;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  Y: 0,
};
let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  Y: gameHeight - 100,
};

window.addEventListener("keydown", changeDirection);

resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
  createBall();
  nextTick();
}
function nextTick() {
  intevalID = setTimeout(() => {
    clearBoard();
    drawPaddles();
    moveBall();
    drawBAll(ballX, ballY);
    checkCollision();
    nextTick();
  }, 10);
}
function clearBoard() {
  ctx.fillStyle = boardBacground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function drawPaddles() {
  ctx.strokeStyle = paddleBorder;

  ctx.fillStyle = paddle1Color;
  ctx.fillRect(paddle1.x, paddle1.Y, paddle1.width, paddle1.height);
  ctx.strokeRect(paddle1.x, paddle1.Y, paddle1.width, paddle1.height);

  ctx.fillStyle = paddle2Color;
  ctx.fillRect(paddle2.x, paddle2.Y, paddle2.width, paddle2.height);
  ctx.strokeRect(paddle2.x, paddle2.Y, paddle2.width, paddle2.height);
}
function createBall() {}
function moveBall() {}
function drawBAll(ballX, ballY) {}
function checkCollision() {}
function changeDirection(event) {
  const keyPressed = event.keyCode;
  const paddle1Up = 87;
  const paddle1Down = 83;
  const paddle2Up = 38;
  const paddle2Down = 40;

  switch (keyPressed) {
    case paddle1Up:
      if (paddle1.Y > 0) {
        paddle1.Y -= paddleSpeed;
      }
      break;
    case paddle1Down:
      if (paddle1.Y < gameHeight - paddle1.height) {
        paddle1.Y += paddleSpeed;
      }
      break;
    case paddle2Up:
      if (paddle2.Y > 0) {
        paddle2.Y -= paddleSpeed;
      }
      break;
    case paddle2Down:
      if (paddle2.Y < gameHeight - paddle2.height) {
        paddle2.Y += paddleSpeed;
      }
      break;
  }
}
function updateScore() {}
function resetGame() {}
