import { Node } from '../types';
import { LayoutNode } from './LayoutNode';
export declare class LayoutGroup {
    protected readonly node: Node;
    leaves: LayoutNode[];
    groups: LayoutGroup[];
    parent?: LayoutGroup;
    padding: number;
    index: number;
    constructor(node: Node, padding: number, index: number);
    get element(): Node;
    get id(): string;
}
//# sourceMappingURL=LayoutGroup.d.ts.map