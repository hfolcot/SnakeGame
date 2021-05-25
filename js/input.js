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

            // Pause
            if(e.key ==='p' && game.state == 1){
                game.state = 2;
            } else if(e.key ==='p' && game.state === 2) {
                game.state = 1;
            }

            // Start/Restart Game
            if(e.code == 'Space' && [0, 3].indexOf(game.state) != -1){
                game.init();
                game.state = 1;
            }
        })
    }
}