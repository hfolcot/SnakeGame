class Snake {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.direction = 'ArrowRight';
        this.tail = [];
    }

    update(game) {
        if(game.frame % Math.floor(100/game.speed) === 0){
            switch(this.direction){
                case 'ArrowRight':
                    this.x += 10;
                    break;
                case 'ArrowLeft':
                    this.x -= 10;
                    break;
                case 'ArrowDown':
                    this.y += 10;
                    break;
                case 'ArrowUp':
                    this.y -= 10;
                    break;
            }
            
        this.tail.push({x: this.x, y: this.y});
        if (this.tail.length > game.points) {
            this.tail.shift();
        }
        }
        if(this.x + 1 === game.food.x && this.y + 1 === game.food.y){
            game.food.update(game);
            game.points++;
        }
        
    }
    draw(ctx){
        ctx.fillStyle = 'green';
        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.size, this.size);
        }
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}