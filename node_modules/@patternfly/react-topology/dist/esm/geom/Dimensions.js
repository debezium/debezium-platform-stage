export default class Dimensions {
    constructor(width = 0, height = 0) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    static singleUse(width = 0, height = 0) {
        Dimensions.SINGLETON.width = width;
        Dimensions.SINGLETON.height = height;
        return Dimensions.SINGLETON;
    }
    static fromDimensions(dimension) {
        return new Dimensions(dimension.width, dimension.height);
    }
    isEmpty() {
        return this.width <= 0 || this.height <= 0;
    }
    setSize(w, h) {
        this.width = w;
        this.height = h;
        return this;
    }
    scale(scaleX, scaleY) {
        const sy = scaleY != null ? scaleY : scaleX;
        this.width *= scaleX;
        this.height *= sy;
        return this;
    }
    resize(dw, dh) {
        this.width += dw;
        this.height += dh;
        return this;
    }
    expand(h, v) {
        this.height += v * 2;
        this.width += h * 2;
        return this;
    }
    clone() {
        return Dimensions.fromDimensions(this);
    }
    equals(r) {
        return r.width === this.width && r.height === this.height;
    }
}
Dimensions.EMPTY = new Dimensions();
Dimensions.SINGLETON = new Dimensions();
//# sourceMappingURL=Dimensions.js.map