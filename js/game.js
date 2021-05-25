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
        this.speed = 15;
        this.state = 0;
        this.frame = 0;
        this.points = 0;
        new InputHandler();
    }
    init(){
        this.snake = new Snake(10, 10);
        this.food = new Food();
        this.speed = 15;
        this.frame = 0;
        this.points = 0;
    }
    update(ctx, canvas) {
        if(this.state == 0){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let startMessage = new Message(canvas.width/2, canvas.height/2, 'bold 25px Arial', "Welcome to Snake!", "white");
            startMessage.draw(ctx);
            let startText = new Message(canvas.width/2, canvas.height/2 + 30, 'bold 18px Arial', "Press space to start", "white");
            startText.draw(ctx);  
        }
        if (this.state === 1) {
            this.snake.update(this, canvas);
        }
        this.food.draw(ctx);
        this.snake.draw(ctx);
        if(this.state === 2){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let pauseText = new Message(canvas.width/2, canvas.height/2, 'bold 25px Arial', "Paused", "white");
            pauseText.draw(ctx);
        }
        if(this.state === 3){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.height, canvas.width);
            let gameOverMessage = new Message(canvas.width/2, canvas.height/2, 'bold 25px Arial', "Game Over", "white");
            gameOverMessage.draw(ctx);
            let scoreText = new Message(canvas.width/2, canvas.height/2 + 30, 'bold 18px Arial', "Your Score: " + game.points, "white");
            scoreText.draw(ctx);        
            let restartText = new Message(canvas.width/2, canvas.height/2 + 60, 'bold 18px Arial', "Press space to restart", "white");
            restartText.draw(ctx);        
        }

    }
}