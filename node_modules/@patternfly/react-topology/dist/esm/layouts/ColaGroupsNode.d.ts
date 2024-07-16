import * as webcola from 'webcola';
import { Node } from '../types';
import { LayoutNode } from './LayoutNode';
export declare class ColaGroupsNode extends LayoutNode implements webcola.Node {
    fixed: number;
    constructor(node: Node, distance: number, index?: number);
    setFixed(fixed: boolean): void;
    update(): void;
    get width(): number;
    get height(): number;
    get radius(): number;
    get collisionRadius(): number;
}
//# sourceMappingURL=ColaGroupsNode.d.ts.map