import { Placement } from '../enums';
import { Modifier, Rect, Offsets } from '../types';
type OffsetsFunction = (arg0: {
    popper: Rect;
    reference: Rect;
    placement: Placement;
}) => [number | null | undefined, number | null | undefined];
type Offset = OffsetsFunction | [number | null | undefined, number | null | undefined];
export interface Options {
    offset: Offset;
}
/**
 * @param placement
 * @param rects
 * @param offset
 */
export declare function distanceAndSkiddingToXY(placement: Placement, rects: {
    popper: Rect;
    reference: Rect;
}, offset: Offset): Offsets;
export type OffsetModifier = Modifier<'offset', Options>;
declare const _default: OffsetModifier;
export default _default;
//# sourceMappingURL=offset.d.ts.map