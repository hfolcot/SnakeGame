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
        this.state = 1;
        this.frame = 0;
        this.points = 0;
        new InputHandler();
    }
    update(ctx, canvas) {
        if (this.state === 1) {
            this.snake.update(this, canvas);
        }
        this.food.draw(ctx);
        this.snake.draw(ctx);

    }
}