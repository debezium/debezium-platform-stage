import * as d3 from 'd3';
import { Node } from '../types';
import { Rect } from '../geom';
import { LayoutGroup } from './LayoutGroup';
export declare class LayoutNode implements d3.SimulationNodeDatum {
    protected readonly node: Node;
    protected xx?: number;
    protected yy?: number;
    protected nodeWidth: number;
    protected nodeHeight: number;
    protected nodeRadius: number;
    readonly distance: number;
    parent?: LayoutGroup;
    index: number;
    isFixed: boolean;
    constructor(node: Node, distance: number, index?: number);
    get element(): Node;
    get id(): string;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get fx(): number | undefined;
    get fy(): number | undefined;
    setPosition(x: number, y: number): void;
    setFixed(fixed: boolean): void;
    get nodeBounds(): Rect;
    get width(): number;
    get height(): number;
    update(): void;
    get radius(): number;
    get collisionRadius(): number;
}
//# sourceMappingURL=LayoutNode.d.ts.map