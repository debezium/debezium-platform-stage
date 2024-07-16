import { Graph, Layout } from '../../types';
import { DagreLayout, DagreLayoutOptions } from '../../layouts/DagreLayout';
export declare class PipelineDagreLayout extends DagreLayout implements Layout {
    constructor(graph: Graph, options?: Partial<DagreLayoutOptions>);
    set nodesep(nodesep: number);
    set ranksep(ranksep: number);
}
//# sourceMappingURL=PipelineDagreLayout.d.ts.map