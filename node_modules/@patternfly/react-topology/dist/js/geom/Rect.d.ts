import { Padding, Translatable, RectIface } from './types';
import Point from './Point';
export default class Rect implements Translatable, RectIface {
    static readonly EMPTY: Rect;
    width: number;
    height: number;
    x: number;
    y: number;
    private static SINGLETON;
    static singleUse(x?: number, y?: number, width?: number, height?: number): Rect;
    static fromRect(rect: RectIface): Rect;
    constructor(x?: number, y?: number, width?: number, height?: number);
    isEmpty(): boolean;
    setLocation(x: number, y: number): Rect;
    setSize(w: number, h: number): Rect;
    getCenter(): Point;
    setCenter(x: number, y: number): Rect;
    translate(dx: number, dy: number): Rect;
    scale(scaleX: number, scaleY?: number): Rect;
    resize(dw: number, dh: number): Rect;
    bottom(): number;
    right(): number;
    union({ x, y, width, height }: Rect): Rect;
    expand(h: number, v: number): Rect;
    padding(padding?: Padding): Rect;
    setBounds(x: number, y: number, width: number, height: number): Rect;
    clone(): Rect;
    equals(r: RectIface): boolean;
}
//# sourceMappingURL=Rect.d.ts.map