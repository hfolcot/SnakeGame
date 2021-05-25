const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

let game = new Game();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update(ctx, canvas);
    requestAnimationFrame(animate);
    game.frame++;
}
animate()