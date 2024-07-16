"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const AbstractAnchor_1 = tslib_1.__importDefault(require("../AbstractAnchor"));
const geom_1 = require("../../geom");
const elements_1 = require("../../elements");
class TestAnchor extends AbstractAnchor_1.default {
    getOwner() {
        return this.owner;
    }
    getOffset() {
        return this.offset;
    }
    getLocation() {
        return geom_1.Point.EMPTY;
    }
}
describe('AbstractAnchor', () => {
    it('should have an owner and offset', () => {
        const node = new elements_1.BaseNode();
        let anchor = new TestAnchor(node);
        expect(anchor.getOffset()).toBe(0);
        expect(anchor.getOwner()).toBe(node);
        anchor = new TestAnchor(node, 10);
        expect(anchor.getOffset()).toBe(10);
    });
    it('should default to node center reference point', () => {
        const node = new elements_1.BaseNode();
        node.setBounds(new geom_1.Rect(0, 0, 10, 10));
        expect(new TestAnchor(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
        expect(new TestAnchor(node, 4).getReferencePoint()).toEqual({ x: 9, y: 9 });
    });
});
//# sourceMappingURL=AbstractAnchor.spec.js.map