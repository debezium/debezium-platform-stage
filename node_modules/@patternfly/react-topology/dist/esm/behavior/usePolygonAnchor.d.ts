import * as React from 'react';
import { AnchorEnd, PointTuple, Node } from '../types';
export declare const usePolygonAnchor: (points: PointTuple[], end?: AnchorEnd, type?: string) => void;
export interface WithPolygonAnchorProps {
    setAnchorPoints: (points: PointTuple[]) => void;
}
export declare const withPolygonAnchor: <P extends {} = {}>(getPoints: (element: Node) => PointTuple[], end?: AnchorEnd, type?: string) => (WrappedComponent: React.ComponentType<P>) => React.FunctionComponent<P>;
//# sourceMappingURL=usePolygonAnchor.d.ts.map