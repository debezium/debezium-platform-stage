import * as webcola from 'webcola';
import { Node } from '../types';
import { LayoutNode } from './LayoutNode';
export declare class ColaNode extends LayoutNode implements webcola.Node {
    fixed: number;
    constructor(node: Node, distance: number, index?: number);
    setFixed(fixed: boolean): void;
}
//# sourceMappingURL=ColaNode.d.ts.map