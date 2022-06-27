const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

class SnakePart {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 10;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 4;

let headX = 10;
let headY = 10;
let snakeBody = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

function startGame(){
    moveSnake();
    let result = isGameOver();
    if(result) {
        return;
    }

    clearScreen();
    eatApple();
    drawApple();
    drawSnake();
    drawScore();
    if (score > 5) {
        speed = 15;
    }
    if (score > 10) {
        speed = 20;
    }

    setTimeout(startGame, 1000/speed);
}

function isGameOver() {
    let gameOver = false;

    if (xVelocity === 0 && yVelocity === 0) {
        return false
    }

    //hit walls
    if (headX < 0) {
        gameOver = true;
    }
    else if (headX === tileCount) {
        gameOver = true;
    }
    else if (headY < 0) {
        gameOver = true;
    }
    else if (headY === tileCount) {
        gameOver = true;
    }

    //hit body
    for (let i = 0; i < snakeBody.length; i++) {
        let part = snakeBody[i];
        if (part.x === headX && part.y === headY) {
            gameOver = true;
            break;
        }
    }

    if(gameOver) {
        ctx.fillStyle = '#171f2f'
        ctx.font = '30px Arial'
        ctx.fillText('GAME OVER!', canvas.width/3.5, canvas.height/2)
    }
    return gameOver
}

function drawScore() {
    ctx.fillStyle = '#c50707';
    ctx.font = "10px Arial"
    ctx.fillText('Score ' + score, canvas.width - 55, 10);
}

function clearScreen() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    //body
    ctx.fillStyle = 'rgba(140,51,197,0.45)';
    for(let i = 0; i < snakeBody.length; i++) {
        let part = snakeBody[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount , tileSize, tileSize);
    }
    snakeBody.push(new SnakePart(headX, headY));
    if(snakeBody.length > tailLength) {
        snakeBody.shift();
    }

    //head
    ctx.fillStyle = '#ef324a';
    ctx.fillRect(headX * tileCount, headY * tileCount , tileSize, tileSize);
}

function moveSnake() {
    headX += xVelocity;
    headY += yVelocity;
}

function drawApple() {
    ctx.fillStyle = '#3fe135';
    ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize);
}

function eatApple() {
    if(appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random()*tileCount);
        appleY = Math.floor(Math.random()*tileCount);
        tailLength++;
        score++
    }
}


startGame()

