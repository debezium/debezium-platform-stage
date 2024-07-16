import { PointTuple } from '../types';
/**
 * @param id
 */
export declare function createSvgIdUrl(id: string): string;
export declare type HullPaddingGetter = (point: PointTuple) => number;
/**
 * @param scale
 * @param v
 */
export declare function vecScale(scale: number, v: PointTuple): PointTuple;
/**
 * @param pv1
 * @param pv2
 */
export declare function vecSum(pv1: PointTuple, pv2: PointTuple): PointTuple;
/**
 * @param p0
 * @param p1
 */
export declare function unitNormal(p0: PointTuple, p1: PointTuple): PointTuple;
/**
 * @param startPoint
 * @param endPoint
 * @param padding
 */
export declare function boundingBoxForLine(startPoint: PointTuple, endPoint: PointTuple, padding?: number | HullPaddingGetter): [PointTuple, PointTuple, PointTuple, PointTuple];
export declare const pointTuplesToPath: (segments: PointTuple[]) => string;
/**
 * @param polyPoints
 * @param hullPadding
 */
export declare function hullPath(polyPoints: PointTuple[], hullPadding?: number | HullPaddingGetter): string;
//# sourceMappingURL=svg-utils.d.ts.map