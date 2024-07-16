import * as React from 'react';
import { Node, PointTuple, TopologyQuadrant } from '../../../types';
export declare const HEXAGON_CORNER_RADIUS = 6;
export declare const OCTAGON_CORNER_RADIUS = 4;
export declare const RHOMBUS_CORNER_RADIUS = 10;
export declare const TRAPEZOID_CORNER_RADIUS = 10;
export declare const LOWER_LEFT_RADIANS: number;
export declare const LOWER_RIGHT_RADIANS: number;
export declare const UPPER_LEFT_RADIANS: number;
export declare const UPPER_RIGHT_RADIANS: number;
export declare const DEFAULT_DECORATOR_RADIUS = 12;
export declare const DEFAULT_DECORATOR_PADDING = 4;
export interface ShapeProps {
    className?: string;
    element: Node;
    width: number;
    height: number;
    filter?: string;
    sides?: number;
    cornerRadius?: number;
    dndDropRef?: (node: SVGElement | null) => void;
}
export declare const getPointsForSides: (numSides: number, size: number, padding?: number) => PointTuple[];
export declare const getHullPath: (points: PointTuple[], padding: number) => string;
export declare const getPathForSides: (numSides: number, size: number, padding?: number) => string;
export declare const getShapeComponent: (node: Node) => React.FunctionComponent<ShapeProps>;
export declare const getDefaultShapeDecoratorCenter: (quadrant: TopologyQuadrant, node: Node) => {
    x: number;
    y: number;
};
//# sourceMappingURL=shapeUtils.d.ts.map