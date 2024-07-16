"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Rect_1 = tslib_1.__importDefault(require("../Rect"));
describe('Rect', () => {
    it('should provide an empty instance', () => {
        expect(Rect_1.default.EMPTY).toEqual({ x: 0, y: 0, width: 0, height: 0 });
    });
    it('should re-use single use instance', () => {
        expect(Rect_1.default.singleUse()).toBe(Rect_1.default.singleUse());
        expect(Rect_1.default.singleUse()).toEqual({ x: 0, y: 0, width: 0, height: 0 });
        expect(Rect_1.default.singleUse(1)).toEqual({ x: 1, y: 0, width: 0, height: 0 });
        expect(Rect_1.default.singleUse(1, 2)).toEqual({ x: 1, y: 2, width: 0, height: 0 });
        expect(Rect_1.default.singleUse(1, 2, 3)).toEqual({ x: 1, y: 2, width: 3, height: 0 });
        expect(Rect_1.default.singleUse(1, 2, 3, 4)).toEqual({ x: 1, y: 2, width: 3, height: 4 });
    });
    it('should create a new Rect from existing Rect', () => {
        const r1 = new Rect_1.default(5, 10, 2, 4);
        const r2 = Rect_1.default.fromRect(r1);
        expect(r1).not.toBe(r2);
        expect(r1).toEqual(r2);
    });
    it('should create a Rect', () => {
        expect(new Rect_1.default()).toEqual({ x: 0, y: 0, width: 0, height: 0 });
        expect(new Rect_1.default(1)).toEqual({ x: 1, y: 0, width: 0, height: 0 });
        expect(new Rect_1.default(1, 2, 3)).toEqual({ x: 1, y: 2, width: 3, height: 0 });
        expect(new Rect_1.default(1, 2, 3, 4)).toEqual({ x: 1, y: 2, width: 3, height: 4 });
    });
    it('should be empty if no height or width', () => {
        expect(new Rect_1.default().isEmpty()).toBe(true);
        expect(new Rect_1.default(0, 0, 1, 0).isEmpty()).toBe(true);
        expect(new Rect_1.default(0, 0, 0, 1).isEmpty()).toBe(true);
        expect(new Rect_1.default(0, 0, 1, 1).isEmpty()).toBe(false);
    });
    it('should set location', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.setLocation(2, 3)).toBe(r);
        expect(r).toEqual({ x: 2, y: 3, width: 8, height: 9 });
    });
    it('should set size', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.setSize(2, 3)).toBe(r);
        expect(r).toEqual({ x: 5, y: 10, width: 2, height: 3 });
    });
    it('should set center', () => {
        const r = new Rect_1.default(6, 10, 20, 30);
        expect(r.setCenter(10, 30)).toBe(r);
        expect(r).toEqual({ x: 0, y: 15, width: 20, height: 30 });
    });
    it('should get center', () => {
        const r = new Rect_1.default(6, 10, 10, 16);
        expect(r.getCenter()).toEqual({ x: 11, y: 18 });
    });
    it('should translate Rect', () => {
        const r = new Rect_1.default(5, 10, 3, 4);
        expect(r.translate(2, 3)).toBe(r);
        expect(r).toEqual({ x: 7, y: 13, width: 3, height: 4 });
    });
    it('should scale Rect', () => {
        const r = new Rect_1.default(5, 10, 4, 6);
        expect(r.scale(2)).toBe(r);
        expect(r).toEqual({ x: 10, y: 20, width: 8, height: 12 });
        r.scale(0.5, 2);
        expect(r).toEqual({ x: 5, y: 40, width: 4, height: 24 });
    });
    it('should resize the Rect ', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.resize(2, 3)).toBe(r);
        expect(r).toEqual({ x: 5, y: 10, width: 10, height: 12 });
    });
    it('should get the bottom y coordinate', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.bottom()).toBe(19);
    });
    it('should get the right x coordinate', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.right()).toBe(13);
    });
    it('should expand the Rect to enclose another Rect', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.union(new Rect_1.default(2, 12, 4, 27))).toBe(r);
        expect(r).toEqual({ x: 2, y: 10, width: 11, height: 29 });
    });
    it('should expand the Rect in size', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.expand(4, 5)).toBe(r);
        expect(r).toEqual({ x: 1, y: 5, width: 16, height: 19 });
    });
    it('should set padding according to css shorthand rules', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.padding()).toBe(r);
        expect(r.padding()).toEqual({ x: 5, y: 10, width: 8, height: 9 });
        expect(r.padding(undefined)).toEqual({ x: 5, y: 10, width: 8, height: 9 });
        expect(r.clone().padding(5)).toEqual({ x: 0, y: 5, width: 18, height: 19 });
        expect(r.clone().padding([5])).toEqual({ x: 0, y: 5, width: 18, height: 19 });
        expect(r.clone().padding([5, 2])).toEqual({ x: 3, y: 5, width: 12, height: 19 });
        expect(r.clone().padding([5, 2, 4])).toEqual({ x: 5, y: 5, width: 10, height: 18 });
        expect(r.clone().padding([5, 2, 4, 6])).toEqual({ x: 3, y: 5, width: 16, height: 18 });
    });
    it('should set bounds', () => {
        const r = new Rect_1.default(5, 10, 8, 9);
        expect(r.setBounds(2, 3, 6, 7)).toBe(r);
        expect(r).toEqual({ x: 2, y: 3, width: 6, height: 7 });
    });
    it('should clone Rect', () => {
        const r1 = new Rect_1.default(5, 10);
        const r2 = r1.clone();
        expect(r1).not.toBe(r2);
        expect(r1).toEqual(r2);
    });
    it('should check Rect equality', () => {
        const r1 = new Rect_1.default(5, 10, 1, 2);
        const r2 = new Rect_1.default(5, 10, 1, 2);
        const r3 = new Rect_1.default(1, 2, 3, 4);
        expect(r1.equals(r2)).toBe(true);
        expect(r1.equals(r3)).toBe(false);
    });
});
//# sourceMappingURL=Rect.spec.js.map