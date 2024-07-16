import { DimensionsIface } from './types';
export default class Dimensions implements DimensionsIface {
    static readonly EMPTY: Dimensions;
    width: number;
    height: number;
    private static SINGLETON;
    static singleUse(width?: number, height?: number): Dimensions;
    static fromDimensions(dimension: DimensionsIface): Dimensions;
    constructor(width?: number, height?: number);
    isEmpty(): boolean;
    setSize(w: number, h: number): Dimensions;
    scale(scaleX: number, scaleY?: number): Dimensions;
    resize(dw: number, dh: number): Dimensions;
    expand(h: number, v: number): Dimensions;
    clone(): Dimensions;
    equals(r: DimensionsIface): boolean;
}
//# sourceMappingURL=Dimensions.d.ts.map