const player = {
    x: config.start_x,
    y: config.start_y,
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};