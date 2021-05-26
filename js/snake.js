class Snake {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.direction = 'r';
        this.length = 3;
        this.tail = [];
    }

    update(game, canvas) {

        if (game.frame % Math.floor(100 / game.speed) === 0) {
            switch (this.direction) {
                case 'r':
                    this.x += 10;
                    break;
                case 'l':
                    this.x -= 10;
                    break;
                case 'd':
                    this.y += 10;
                    break;
                case 'u':
                    this.y -= 10;
                    break;
            }
            if (this.x < 0 || this.x + this.size > canvas.width || this.y < 0 || this.y + this.size > canvas.height) {
                // Snake has crashed into a wall
                game.state = 3;
            }
            for (let i = 0; i < this.tail.length; i++) {
                if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                    //Snake has crashed into itself
                    game.state = 3;
                }
            }

            this.tail.push({ x: this.x, y: this.y });
            if (this.tail.length > this.length) {
                this.tail.shift();
            }
        }
        if (this.x + 1 === game.food.x && this.y + 1 === game.food.y) {
            game.food.update(game);
            game.points++;
            this.length++;
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'green';
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.size, this.size);
        }
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}