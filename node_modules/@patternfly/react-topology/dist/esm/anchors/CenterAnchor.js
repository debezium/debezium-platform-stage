import AbstractAnchor from './AbstractAnchor';
import { getEllipseAnchorPoint } from '../utils/anchor-utils';
export default class CenterAnchor extends AbstractAnchor {
    getLocation(reference) {
        const bounds = this.owner.getBounds();
        if (this.offset === 0) {
            return bounds.getCenter();
        }
        const offset2x = this.offset * 2;
        return getEllipseAnchorPoint(bounds.getCenter(), offset2x, offset2x, reference);
    }
}
//# sourceMappingURL=CenterAnchor.js.map