class Food {
    constructor(){
        this.x = Math.floor(Math.random() * 30) * 10 + 1;
        this.y = Math.floor(Math.random() * 30) * 10 + 1;
        this.size = 8;
        this.color = 'red';
        console.log(this);
    }
    update(){
        this.x = Math.floor(Math.random() * 30) * 10 + 1;
        this.y = Math.floor(Math.random() * 30) * 10 + 1;
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}