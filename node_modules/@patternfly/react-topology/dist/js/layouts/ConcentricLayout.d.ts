import { Edge, Graph, Layout, Node } from '../types';
import { BaseLayout } from './BaseLayout';
import { LayoutOptions } from './LayoutOptions';
import { LayoutNode } from './LayoutNode';
import { LayoutLink } from './LayoutLink';
import { ConcentricNode } from './ConcentricNode';
import { ConcentricGroup } from './ConcentricGroup';
export declare type ConcentricLayoutOptions = LayoutOptions & {
    splitLevel?: number;
};
export declare class ConcentricLayout extends BaseLayout implements Layout {
    private concentricOptions;
    constructor(graph: Graph, options?: Partial<ConcentricLayoutOptions>);
    protected createLayoutNode(node: Node, nodeDistance: number, index: number): ConcentricNode;
    protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean): LayoutLink;
    protected createLayoutGroup(node: Node, padding: number, index: number): ConcentricGroup;
    protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void;
}
//# sourceMappingURL=ConcentricLayout.d.ts.map