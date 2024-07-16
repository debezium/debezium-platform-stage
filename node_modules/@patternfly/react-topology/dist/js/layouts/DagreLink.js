"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DagreLink = void 0;
const tslib_1 = require("tslib");
const Point_1 = tslib_1.__importDefault(require("../geom/Point"));
const LayoutLink_1 = require("./LayoutLink");
class DagreLink extends LayoutLink_1.LayoutLink {
    updateBendpoints() {
        if (this.points && !this.isFalse && this.points.length > 2) {
            this.element.setBendpoints(this.points.slice(1, -1).map((point) => new Point_1.default(point.x, point.y)));
        }
    }
}
exports.DagreLink = DagreLink;
//# sourceMappingURL=DagreLink.js.map