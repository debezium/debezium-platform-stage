import * as React from 'react';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
interface ConnectorCrossProps {
    startPoint: Point;
    endPoint: Point;
    className?: string;
    isTarget?: boolean;
    size?: number;
    dragRef?: ConnectDragSource;
}
declare const ConnectorCross: React.FunctionComponent<ConnectorCrossProps>;
export default ConnectorCross;
//# sourceMappingURL=ConnectorCross.d.ts.map