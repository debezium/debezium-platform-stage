import { Translatable, PointIface } from './types';
export default class Point implements Translatable, PointIface {
    static readonly EMPTY: Point;
    x: number;
    y: number;
    private static SINGLETON;
    static singleUse(x?: number, y?: number): Point;
    static fromPoint(point: PointIface): Point;
    constructor(x?: number, y?: number);
    setLocation(x: number, y: number): Point;
    negate(): Point;
    translate(dx: number, dy: number): Point;
    scale(scaleX: number, scaleY?: number): Point;
    clone(): Point;
    equals(p: PointIface): boolean;
}
//# sourceMappingURL=Point.d.ts.map