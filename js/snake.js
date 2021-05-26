class Snake {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.direction = 'r';
        this.length = 3;
        this.tail = [];
        this.eatSound = new Audio('assets/sounds/beep.wav');
        this.crashSound = new Audio('assets/sounds/crash.wav');
        this.owSound = new Audio('assets/sounds/ow.wav');
    }

    update(game, canvas) {

        if (game.frame % (10 - game.speed) === 0) {
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
                this.crashSound.play();
                game.state = 3;
            }
            for (let i = 0; i < this.tail.length; i++) {
                if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                    //Snake has crashed into itself
                    this.owSound.play();
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
            game.points += (1 * game.speed);
            this.length++;
            this.eatSound.pause();
            this.eatSound.load();
            this.eatSound.play();
            document.getElementById('score').innerText = game.points;
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