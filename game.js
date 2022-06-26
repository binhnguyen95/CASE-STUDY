const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 10;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 4;
let headX = 10;
let headY = 10;

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

    setTimeout(startGame, 1000/speed);
}

function isGameOver() {
    let gameOver = false;
    //walls
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

    if(gameOver) {
        ctx.fillStyle = '#e80ae6'
        ctx.font = '50px Arial'
        ctx.fillText('R.I.P :(', canvas.width/3, canvas.height/2)
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
    ctx.fillStyle = '#f31831';
    ctx.fillRect(headX*tileCount, headY*tileCount , tileSize,tileSize);
}

function moveSnake() {
    headX += xVelocity;
    headY += yVelocity;
}

function drawApple() {
    ctx.fillStyle = '#1cee0f';
    ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize);
}

function eatApple() {
    if(appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random()*tileCount);
        appleY = Math.floor(Math.random()*tileCount);
        score++;
    }
}
startGame()

