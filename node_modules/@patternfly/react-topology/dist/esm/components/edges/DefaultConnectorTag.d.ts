import * as React from 'react';
import Point from '../../geom/Point';
import { NodeStatus } from '../../types';
interface DefaultConnectorTagProps {
    className?: string;
    startPoint: Point;
    endPoint: Point;
    tag: string;
    status?: NodeStatus;
    paddingX?: number;
    paddingY?: number;
}
declare const DefaultConnectorTag: React.FunctionComponent<DefaultConnectorTagProps>;
export default DefaultConnectorTag;
//# sourceMappingURL=DefaultConnectorTag.d.ts.map