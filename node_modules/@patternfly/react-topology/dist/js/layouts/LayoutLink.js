"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutLink = void 0;
class LayoutLink {
    constructor(edge, source, target, isFalse = false) {
        this.edge = edge;
        this.sourceNode = source;
        this.targetNode = target;
        this.isFalse = isFalse;
    }
    get element() {
        return this.edge;
    }
    get id() {
        return this.edge.getId();
    }
    get source() {
        return this.sourceNode;
    }
    get target() {
        return this.targetNode;
    }
}
exports.LayoutLink = LayoutLink;
//# sourceMappingURL=LayoutLink.js.map