import * as React from 'react';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
interface ConnectorArrowProps {
    startPoint: Point;
    endPoint: Point;
    className?: string;
    isTarget?: boolean;
    size?: number;
    dragRef?: ConnectDragSource;
}
declare const ConnectorArrow: React.FunctionComponent<ConnectorArrowProps>;
export default ConnectorArrow;
//# sourceMappingURL=ConnectorArrow.d.ts.map