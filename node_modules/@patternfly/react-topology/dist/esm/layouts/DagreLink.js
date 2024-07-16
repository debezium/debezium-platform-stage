import Point from '../geom/Point';
import { LayoutLink } from './LayoutLink';
export class DagreLink extends LayoutLink {
    updateBendpoints() {
        if (this.points && !this.isFalse && this.points.length > 2) {
            this.element.setBendpoints(this.points.slice(1, -1).map((point) => new Point(point.x, point.y)));
        }
    }
}
//# sourceMappingURL=DagreLink.js.map