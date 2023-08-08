const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const startingX = canvas.width / 2;
const startingY = canvas.height / 2;

let currentX = startingX;
let currentY = startingY;

function move(direction) {
    const stepSize = 10;

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    switch (direction) {
        case 'forward':
            currentY -= stepSize;
            break;
        case 'backward':
            currentY += stepSize;
            break;
        case 'right':
            currentX += stepSize;
            break;
        case 'left':
            currentX -= stepSize;
            break;
    }

    ctx.lineTo(currentX, currentY);
    ctx.stroke();
}