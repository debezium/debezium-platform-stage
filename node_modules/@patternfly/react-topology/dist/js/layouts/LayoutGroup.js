"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGroup = void 0;
class LayoutGroup {
    constructor(node, padding, index) {
        this.leaves = [];
        this.groups = [];
        this.node = node;
        this.padding = padding;
        this.index = index;
    }
    get element() {
        return this.node;
    }
    get id() {
        return this.node.getId();
    }
}
exports.LayoutGroup = LayoutGroup;
//# sourceMappingURL=LayoutGroup.js.map