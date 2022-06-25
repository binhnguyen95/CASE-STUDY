const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 10;

let tileCount = 25;
let tileSize = canvas.width / tileCount - 5;
let headX = 10;
let headY = 10;

let xVelocity = 0;
let yVelocity = 0;

function startGame(){
    clearScreen();
    moveSnake();
    drawSnake();
    setTimeout(startGame, 1000/speed);
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
    headX += xVelocity
    headY += yVelocity
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
    //up
    if(event.keyCode === 38) {
        if(yVelocity === 1) {
            return;
        }
        xVelocity = 0;
        yVelocity = -1;
    }
    //down
    if(event.keyCode === 40 ) {
        if(yVelocity === -1) {
            return;
        }
        xVelocity = 0;
        yVelocity = 1;
    }
    //left
    if(event.keyCode === 37) {
        if(xVelocity === 1) {
            return;
        }
        xVelocity = -1;
        yVelocity = 0;
    }
    //right
    if(event.keyCode === 39) {
        if(xVelocity === -1) {
            return;
        }
        xVelocity = +1;
        yVelocity = 0;
    }

}




startGame()

