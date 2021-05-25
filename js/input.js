class InputHandler {
    constructor(){
        document.addEventListener('keydown', function(e) {
            // Prevent snake from turning in opposite direction into itself
            if(e.key === 'ArrowLeft' && game.snake.direction != 'r'){
                game.snake.direction = 'l';
            }
            if(e.key === 'ArrowRight' && game.snake.direction != 'l'){
                game.snake.direction = 'r';
            }
            if(e.key === 'ArrowUp' && game.snake.direction != 'd'){
                game.snake.direction = 'u';
            }
            if(e.key === 'ArrowDown' && game.snake.direction != 'u'){
                game.snake.direction = 'd';
            }
        })
    }
}