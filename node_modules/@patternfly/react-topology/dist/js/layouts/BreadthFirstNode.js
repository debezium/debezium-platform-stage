"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadthFirstNode = void 0;
const LayoutNode_1 = require("./LayoutNode");
class BreadthFirstNode extends LayoutNode_1.LayoutNode {
    constructor(node, distance, index = -1) {
        super(node, distance, index);
    }
}
exports.BreadthFirstNode = BreadthFirstNode;
//# sourceMappingURL=BreadthFirstNode.js.map