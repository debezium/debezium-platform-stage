"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Dimensions_1 = tslib_1.__importDefault(require("../../geom/Dimensions"));
const BaseNode_1 = tslib_1.__importDefault(require("../BaseNode"));
describe('BaseNode', () => {
    it('should init dimensions', () => {
        let node = new BaseNode_1.default();
        expect(node.isDimensionsInitialized()).toBe(false);
        node.setDimensions(new Dimensions_1.default());
        expect(node.isDimensionsInitialized()).toBe(true);
        node = new BaseNode_1.default();
        node.setModel({
            id: 'test',
            type: 'test',
            width: 1,
            height: 1
        });
        expect(node.isDimensionsInitialized()).toBe(true);
    });
    it('should be invisible until dimensions are set', () => {
        const node = new BaseNode_1.default();
        node.setVisible(true);
        expect(node.isDimensionsInitialized()).toBe(false);
        expect(node.isVisible()).toBe(false);
        node.setDimensions(new Dimensions_1.default());
        expect(node.isDimensionsInitialized()).toBe(true);
        expect(node.isVisible()).toBe(true);
    });
    it('should init group dimensions based on child state', () => {
        const node = new BaseNode_1.default();
        node.setGroup(true);
        expect(node.isDimensionsInitialized()).toBe(false);
        const c1 = new BaseNode_1.default();
        node.appendChild(c1);
        expect(node.isDimensionsInitialized()).toBe(false);
        c1.setDimensions(new Dimensions_1.default());
        expect(node.isDimensionsInitialized()).toBe(true);
        node.removeChild(c1);
        expect(node.isDimensionsInitialized()).toBe(true);
        node.setGroup(false);
        expect(node.isDimensionsInitialized()).toBe(true);
    });
});
//# sourceMappingURL=BaseNode.spec.js.map