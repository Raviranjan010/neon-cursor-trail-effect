'use strict';

// Neon Cursor Trail Effect
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width, height;
const trail = [];
let mouseX = 3,
    mouseY = 3,
    isMoving = false;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function init() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchstart', e => e.preventDefault());
    document.addEventListener('visibilitychange', onVisibilityChange);
    requestAnimationFrame(render);
}

function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    createTrail(mouseX, mouseY);
}

function onTouchMove(e) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
    isMoving = true;
    createTrail(mouseX, mouseY);
}

function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        ctx.clearRect(0, 0, width, height);
    } else {
        requestAnimationFrame(render);
    }
}

function createTrail(x, y) {
    trail.push({ x, y, alpha: 1 });
    if (trail.length > 105) trail.shift();
}

function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ff00ff';

    // Fade out when cursor stops moving
    if (!isMoving) {
        for (let i = 0; i < trail.length; i++) {
            trail[i].alpha -= 0.05;
            if (trail[i].alpha <= 0) {
                trail.splice(i, 1);
                i--;
            }
        }
    }

    // Draw trail
    for (let i = 0; i < trail.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(trail[i].x, trail[i].y);
        ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
        ctx.globalAlpha = trail[i].alpha;
        ctx.stroke();
    }

    isMoving = false;
    requestAnimationFrame(render);
}

init();
