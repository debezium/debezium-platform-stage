import { Edge } from '../types';
import { LayoutNode } from './LayoutNode';
export declare class LayoutLink {
    private readonly edge;
    sourceNode: LayoutNode;
    targetNode: LayoutNode;
    isFalse: boolean;
    constructor(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse?: boolean);
    get element(): Edge;
    get id(): string;
    get source(): any;
    get target(): any;
}
//# sourceMappingURL=LayoutLink.d.ts.map