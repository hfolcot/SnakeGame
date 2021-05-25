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
        this.speed = 15;
        this.state = 0;
        this.frame = 0;
    }
    update(ctx, canvas) {
        this.snake.update(this);
        this.snake.draw(ctx);
    }
}