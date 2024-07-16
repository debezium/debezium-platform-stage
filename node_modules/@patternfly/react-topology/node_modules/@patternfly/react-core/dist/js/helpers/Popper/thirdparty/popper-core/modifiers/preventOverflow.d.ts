import { Placement, Boundary, RootBoundary } from '../enums';
import { Rect, Modifier, Padding } from '../types';
type TetherOffset = (arg0: {
    popper: Rect;
    reference: Rect;
    placement: Placement;
}) => number | number;
export interface Options {
    mainAxis: boolean;
    altAxis: boolean;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    altBoundary: boolean;
    /**
     * Allows the popper to overflow from its boundaries to keep it near its
     * reference element
     */
    tether: boolean;
    tetherOffset: TetherOffset;
    padding: Padding;
}
export type PreventOverflowModifier = Modifier<'preventOverflow', Options>;
declare const _default: PreventOverflowModifier;
export default _default;
//# sourceMappingURL=preventOverflow.d.ts.map