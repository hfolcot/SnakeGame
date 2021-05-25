class Snake {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.direction = 'ArrowRight';
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
            
        }
        
    }
    draw(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}