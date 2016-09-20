function RobotToy() {
    this.x = 0;
    this.y = 0;
    this.direction = RobotToy.prototype.NORTH;
}

RobotToy.prototype.move = function () {
    switch (this.direction) {
        case RobotToy.prototype.NORTH:
            this.y++;
            break;
        case RobotToy.prototype.EAST:
            this.x++;
            break;
        case RobotToy.prototype.SOUTH:
            if (this.y > 0) {
                this.y--;
            }
            break;
        case RobotToy.prototype.WEST:
            if (this.x > 0) {
                this.x--;
            }
            break;
    }
};

RobotToy.prototype.left = function () {
    this.direction = (this.direction + 3) % 4;
};

RobotToy.prototype.right = function () {
    this.direction = (this.direction + 1) % 4;
};

RobotToy.prototype.report = function () {
    return "X: " + this.x + ", Y: " + this.y + ", " + this[this.direction];
};

RobotToy.prototype.NORTH = 0;
RobotToy.prototype.EAST = 1;
RobotToy.prototype.SOUTH = 2;
RobotToy.prototype.WEST = 3;

RobotToy.prototype[RobotToy.prototype.NORTH] = "North";
RobotToy.prototype[RobotToy.prototype.EAST] = "East";
RobotToy.prototype[RobotToy.prototype.SOUTH] = "South";
RobotToy.prototype[RobotToy.prototype.WEST] = "West";