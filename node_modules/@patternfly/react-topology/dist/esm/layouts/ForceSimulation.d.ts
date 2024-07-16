import * as d3 from 'd3';
export interface ForceSimulationNode extends d3.SimulationNodeDatum {
    id: string;
    collisionRadius: number;
    update(): void;
}
interface ForceSimulationOptions {
    collideDistance: number;
    simulationSpeed: number;
    chargeStrength: number;
    onSimulationEnd?: () => void;
}
declare class ForceSimulation {
    private forceLink;
    private simulation;
    private options;
    private destroyed;
    constructor(options?: Partial<ForceSimulationOptions>);
    destroy(): void;
    useForceSimulation(nodes: ForceSimulationNode[], links: d3.SimulationLinkDatum<ForceSimulationNode>[], distance: (link: d3.SimulationLinkDatum<ForceSimulationNode>, i: number, links: d3.SimulationLinkDatum<ForceSimulationNode>[]) => number): void;
    haltForceSimulation(): void;
    forceCenter(cx: number, cy: number): void;
    stopSimulation(): void;
    restart(): void;
    alpha(value: number): void;
    alphaTarget(value: number): void;
}
export { ForceSimulation };
//# sourceMappingURL=ForceSimulation.d.ts.map