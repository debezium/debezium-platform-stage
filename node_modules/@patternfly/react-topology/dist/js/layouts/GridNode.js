"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridNode = void 0;
const LayoutNode_1 = require("./LayoutNode");
class GridNode extends LayoutNode_1.LayoutNode {
    constructor(node, distance, index = -1) {
        super(node, distance, index);
    }
}
exports.GridNode = GridNode;
//# sourceMappingURL=GridNode.js.map