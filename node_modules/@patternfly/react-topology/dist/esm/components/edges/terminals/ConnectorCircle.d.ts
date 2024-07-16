import * as React from 'react';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
interface ConnectorCircleProps {
    startPoint: Point;
    endPoint: Point;
    className?: string;
    isTarget?: boolean;
    size?: number;
    dragRef?: ConnectDragSource;
}
declare const ConnectorCircle: React.FunctionComponent<ConnectorCircleProps>;
export default ConnectorCircle;
//# sourceMappingURL=ConnectorCircle.d.ts.map