"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const RectAnchor_1 = tslib_1.__importDefault(require("../RectAnchor"));
const geom_1 = require("../../geom");
const elements_1 = require("../../elements");
describe('RectAnchor', () => {
    it('should return node center location', () => {
        const node = new elements_1.BaseNode();
        node.setBounds(new geom_1.Rect(4, 5, 0, 0));
        expect(new RectAnchor_1.default(node).getLocation(new geom_1.Point())).toEqual({ x: 4, y: 5 });
    });
    it('should return node anchor location', () => {
        const node = new elements_1.BaseNode();
        node.setBounds(new geom_1.Rect(0, 0, 10, 10));
        expect(new RectAnchor_1.default(node).getLocation(new geom_1.Point(100, 5))).toEqual({ x: 10, y: 5 });
        expect(new RectAnchor_1.default(node).getLocation(new geom_1.Point(5, 100))).toEqual({ x: 5, y: 10 });
        expect(new RectAnchor_1.default(node).getLocation(new geom_1.Point(100, 100))).toEqual({ x: 10, y: 10 });
        expect(new RectAnchor_1.default(node, 4).getLocation(new geom_1.Point(100, 5))).toEqual({ x: 14, y: 5 });
        expect(new RectAnchor_1.default(node, 4).getLocation(new geom_1.Point(5, 100))).toEqual({ x: 5, y: 14 });
        expect(new RectAnchor_1.default(node, 4).getLocation(new geom_1.Point(100, 100))).toEqual({ x: 14, y: 14 });
    });
    it('should return node center reference point', () => {
        const node = new elements_1.BaseNode();
        node.setBounds(new geom_1.Rect(0, 0, 10, 10));
        expect(new RectAnchor_1.default(node).getReferencePoint()).toEqual({ x: 5, y: 5 });
    });
});
//# sourceMappingURL=RectAnchor.spec.js.map