import { AbstractAnchor } from '../../anchors';
import { Point } from '../../geom';
import { getRectAnchorPoint } from '../../utils';
class CollapsedGroupAnchor extends AbstractAnchor {
    constructor(owner, width, height, offset = 0) {
        super(owner, offset);
        this.width = width;
        this.height = height;
    }
    getLocation(reference) {
        const center = new Point(this.owner.getPosition().x + this.width / 2, this.owner.getPosition().y + this.height / 2);
        const offset2x = this.offset * 2;
        return getRectAnchorPoint(center, this.width + offset2x, this.height + offset2x, reference);
    }
}
export default CollapsedGroupAnchor;
//# sourceMappingURL=CollapsedGroupAnchor.js.map