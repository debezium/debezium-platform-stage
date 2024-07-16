import * as React from 'react';
import Point from '../geom/Point';
interface DefaultCreateConnectorProps {
    startPoint: Point;
    endPoint: Point;
    hints: string[];
    dragging: boolean;
    hover?: boolean;
    className?: string;
    tipContents?: React.ReactNode;
}
declare const DefaultCreateConnector: React.FunctionComponent<DefaultCreateConnectorProps>;
export default DefaultCreateConnector;
//# sourceMappingURL=DefaultCreateConnector.d.ts.map