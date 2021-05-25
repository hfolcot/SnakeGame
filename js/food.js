class Food {
    constructor(){
        this.x = Math.floor(Math.random() * 30) * 10 + 1;
        this.y = Math.floor(Math.random() * 30) * 10 + 1;
        this.size = 8;
        this.color = 'red';
    }
    update(game){
        this.x = Math.floor(Math.random() * 30) * 10 + 1;
        this.y = Math.floor(Math.random() * 30) * 10 + 1;
        for(let i=0; i<game.points-1; i++){
            if(this.x - 1 === game.snake.tail[i].x && this.y - 1 === game.snake.tail[i].y) {
                this.update(game)
            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}