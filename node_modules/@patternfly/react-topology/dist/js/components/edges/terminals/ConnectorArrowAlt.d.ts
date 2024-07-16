import * as React from 'react';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
interface ConnectorArrowAltProps {
    startPoint: Point;
    endPoint: Point;
    className?: string;
    isTarget?: boolean;
    size?: number;
    dragRef?: ConnectDragSource;
}
declare const ConnectorArrowAlt: React.FunctionComponent<ConnectorArrowAltProps>;
export default ConnectorArrowAlt;
//# sourceMappingURL=ConnectorArrowAlt.d.ts.map