import Point from '../geom/Point';
import { Anchor, Node } from '../types';
export default abstract class AbstractAnchor<E extends Node = Node> implements Anchor {
    protected readonly owner: E;
    protected readonly offset: number;
    constructor(owner: E, offset?: number);
    abstract getLocation(reference: Point): Point;
    getReferencePoint(): Point;
}
//# sourceMappingURL=AbstractAnchor.d.ts.map