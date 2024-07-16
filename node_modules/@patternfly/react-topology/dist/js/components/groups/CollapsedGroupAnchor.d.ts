import { Node } from '../../types';
import { AbstractAnchor } from '../../anchors';
import { Point } from '../../geom';
declare class CollapsedGroupAnchor extends AbstractAnchor<Node> {
    protected readonly width: number;
    protected readonly height: number;
    constructor(owner: Node, width: number, height: number, offset?: number);
    getLocation(reference: Point): Point;
}
export default CollapsedGroupAnchor;
//# sourceMappingURL=CollapsedGroupAnchor.d.ts.map