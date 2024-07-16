export default class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static singleUse(x = 0, y = 0) {
        Point.SINGLETON.x = x;
        Point.SINGLETON.y = y;
        return Point.SINGLETON;
    }
    static fromPoint(point) {
        return new Point(point.x, point.y);
    }
    setLocation(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    scale(scaleX, scaleY) {
        this.x *= scaleX;
        this.y *= scaleY != null ? scaleY : scaleX;
        return this;
    }
    clone() {
        return Point.fromPoint(this);
    }
    equals(p) {
        return p.x === this.x && p.y === this.y;
    }
}
Point.EMPTY = new Point();
Point.SINGLETON = new Point();
//# sourceMappingURL=Point.js.map