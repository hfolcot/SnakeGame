class InputHandler {
    constructor(){
        document.addEventListener('keydown', function(e) {
            game.snake.direction = e.key;
            //TODO: prevent snake from turning in opposite direction
        })
    }
}