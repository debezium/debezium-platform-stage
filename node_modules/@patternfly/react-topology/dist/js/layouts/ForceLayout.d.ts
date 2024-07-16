import { Graph, Layout } from '../types';
import { ForceSimulationNode } from './ForceSimulation';
import { BaseLayout } from '.';
import { LayoutLink } from './LayoutLink';
import { LayoutOptions } from './LayoutOptions';
export declare class ForceLayout extends BaseLayout implements Layout {
    constructor(graph: Graph, options?: Partial<LayoutOptions>);
    protected getLinkDistance: (e: LayoutLink | d3.SimulationLinkDatum<ForceSimulationNode>) => any;
    protected startLayout(graph: Graph): void;
    protected updateLayout(): void;
}
//# sourceMappingURL=ForceLayout.d.ts.map