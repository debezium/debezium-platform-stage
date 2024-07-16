"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Point_1 = tslib_1.__importDefault(require("./Point"));
class Rect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static singleUse(x = 0, y = 0, width = 0, height = 0) {
        Rect.SINGLETON.x = x;
        Rect.SINGLETON.y = y;
        Rect.SINGLETON.width = width;
        Rect.SINGLETON.height = height;
        return Rect.SINGLETON;
    }
    static fromRect(rect) {
        return new Rect(rect.x, rect.y, rect.width, rect.height);
    }
    isEmpty() {
        return this.width <= 0 || this.height <= 0;
    }
    setLocation(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    setSize(w, h) {
        this.width = w;
        this.height = h;
        return this;
    }
    getCenter() {
        return new Point_1.default(this.x + this.width / 2, this.y + this.height / 2);
    }
    setCenter(x, y) {
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
        return this;
    }
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    scale(scaleX, scaleY) {
        const sy = scaleY != null ? scaleY : scaleX;
        const xx = this.x;
        const yy = this.y;
        this.x *= scaleX;
        this.y *= sy;
        this.width = (xx + this.width) * scaleX - this.x;
        this.height = (yy + this.height) * sy - this.y;
        return this;
    }
    resize(dw, dh) {
        this.width += dw;
        this.height += dh;
        return this;
    }
    bottom() {
        return this.y + this.height;
    }
    right() {
        return this.x + this.width;
    }
    union({ x, y, width, height }) {
        const right = Math.max(this.x + this.width, x + width);
        const bottom = Math.max(this.y + this.height, y + height);
        this.x = Math.min(this.x, x);
        this.y = Math.min(this.y, y);
        this.width = right - this.x;
        this.height = bottom - this.y;
        return this;
    }
    expand(h, v) {
        this.y -= v;
        this.height += v * 2;
        this.x -= h;
        this.width += h * 2;
        return this;
    }
    //
    // Padding Format:  [all], [vertical, horizontal], [top, horizontal, bottom], [top, right, bottom, left]
    //
    padding(padding) {
        if (padding) {
            if (typeof padding === 'number') {
                this.expand(padding, padding);
            }
            else if (padding.length === 1) {
                this.expand(padding[0], padding[0]);
            }
            else if (padding.length === 2) {
                this.expand(padding[1], padding[0]);
            }
            else if (padding.length === 3) {
                this.y -= padding[0];
                this.height += padding[0] + padding[2];
                this.width += padding[1];
            }
            else if (padding.length === 4) {
                this.y -= padding[0];
                this.height += padding[0] + padding[2];
                this.x -= padding[1];
                this.width += padding[1] + padding[3];
            }
        }
        return this;
    }
    setBounds(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    }
    clone() {
        return Rect.fromRect(this);
    }
    equals(r) {
        return r.x === this.x && r.y === this.y && r.width === this.width && r.height === this.height;
    }
}
exports.default = Rect;
Rect.EMPTY = new Rect();
Rect.SINGLETON = new Rect();
//# sourceMappingURL=Rect.js.map