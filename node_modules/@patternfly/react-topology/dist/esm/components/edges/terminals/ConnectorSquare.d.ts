import * as React from 'react';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
interface ConnectorSquareProps {
    startPoint: Point;
    endPoint: Point;
    className?: string;
    isTarget?: boolean;
    size?: number;
    dragRef?: ConnectDragSource;
}
declare const ConnectorSquare: React.FunctionComponent<ConnectorSquareProps>;
export default ConnectorSquare;
//# sourceMappingURL=ConnectorSquare.d.ts.map