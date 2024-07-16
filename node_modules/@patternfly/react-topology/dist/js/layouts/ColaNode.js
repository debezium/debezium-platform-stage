"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColaNode = void 0;
const LayoutNode_1 = require("./LayoutNode");
class ColaNode extends LayoutNode_1.LayoutNode {
    constructor(node, distance, index = -1) {
        super(node, distance, index);
        // fixed is used by Cola during node additions: 1 for fixed
        this.fixed = 0;
        // TODO: Investigate why the issue with rectangular nodes causing the layout to become vertical
        //       this setting will be a problem if nodes can change size dynamically
        // Cola layout has issues with non-square nodes
        const maxDimension = Math.max(this.nodeWidth, this.nodeHeight);
        this.nodeWidth = maxDimension;
        this.nodeHeight = maxDimension;
    }
    setFixed(fixed) {
        super.setFixed(fixed);
        this.fixed = fixed ? 1 : 0;
    }
}
exports.ColaNode = ColaNode;
//# sourceMappingURL=ColaNode.js.map