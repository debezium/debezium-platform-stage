import Point from '../geom/Point';
declare const getEllipseAnchorPoint: (center: Point, width: number, height: number, reference: Point) => Point;
declare const getRectAnchorPoint: (center: Point, width: number, height: number, reference: Point) => Point;
export declare const distanceToPoint: (p: Point, reference: Point) => number;
export declare const getLinesIntersection: (line1: [Point, Point], line2: [Point, Point]) => Point | null;
declare const getPathAnchorPoint: (pathNode: SVGPathElement, reference: Point, useClosestPathPoint?: boolean) => Point;
declare const getPolygonAnchorPoint: (polygonNode: SVGPolygonElement, reference: Point) => Point;
export { getEllipseAnchorPoint, getRectAnchorPoint, getPathAnchorPoint, getPolygonAnchorPoint };
//# sourceMappingURL=anchor-utils.d.ts.map