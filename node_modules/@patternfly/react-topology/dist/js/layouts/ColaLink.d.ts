import { Edge } from '../types';
import { LayoutLink } from './LayoutLink';
import { LayoutNode } from './LayoutNode';
import { ColaNode } from './ColaNode';
import * as webcola from 'webcola';
export declare class ColaLink extends LayoutLink implements webcola.Link<ColaNode | number> {
    constructor(edge: Edge, source: LayoutNode | number, target: LayoutNode | number);
}
//# sourceMappingURL=ColaLink.d.ts.map