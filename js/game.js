/* 

Game States:
0: Start
1: Play
2: Pause
3: End

*/

class Game {
    constructor() {
        this.snake = new Snake(10, 10);
        this.food = new Food();
        this.speed = document.getElementById('speed').value;
        this.state = 0;
        this.frame = 0;
        this.points = 0;
        document.getElementById('score').innerText = this.points;
        new InputHandler();
    }
    init() {
        this.snake = new Snake(10, 10);
        this.food = new Food();
        this.speed = document.getElementById('speed').value;
        this.frame = 0;
        this.points = 0;
        document.getElementById('score').innerText = this.points;
    }
    update(ctx, canvas) {
        this.food.draw(ctx);
        this.snake.draw(ctx);
        if (this.state == 0) {
            document.querySelector('.speed-slider').style.visibility = 'visible';
            document.querySelector('#pauseInfo').style.visibility = 'hidden';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let startMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Welcome to Snake!", "white");
            startMessage.draw(ctx);
            let startText = new Message(canvas.width / 2, canvas.height / 2 + 30, 'bold 18px Arial', "Press space to start", "white");
            startText.draw(ctx);
        }
        if (this.state === 1) {
            document.querySelector('.speed-slider').style.visibility = 'hidden';
            document.querySelector('#pauseInfo').style.visibility = 'visible';
            document.querySelector('#pauseInfo').innerText = 'Press P to pause';
            this.snake.update(this, canvas);
        }
        if (this.state === 2) {
            document.querySelector('#pauseInfo').innerText = 'Press P again to continue';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let pauseText = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Paused", "white");
            pauseText.draw(ctx);
        }
        if (this.state === 3) {
            document.querySelector('.speed-slider').style.visibility = 'visible';
            document.querySelector('#pauseInfo').style.visibility = 'hidden';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let gameOverMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Game Over", "white");
            gameOverMessage.draw(ctx);
            let scoreText = new Message(canvas.width / 2, canvas.height / 2 + 30, 'bold 18px Arial', "Your Score: " + game.points, "white");
            scoreText.draw(ctx);
            let restartText = new Message(canvas.width / 2, canvas.height / 2 + 60, 'bold 18px Arial', "Press space to restart", "white");
            restartText.draw(ctx);
        }
        if (this.score % 1 === 0) {
            this.speed += 5;
        }

    }
}