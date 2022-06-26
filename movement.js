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