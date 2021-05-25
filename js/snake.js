class Snake {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
    }

    update(game) {
        if(game.frame % Math.floor(100/game.speed) === 0){
            this.x += 10;
        }
        
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}