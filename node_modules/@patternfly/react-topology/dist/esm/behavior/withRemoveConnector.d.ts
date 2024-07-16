import * as React from 'react';
import { Edge } from '../types';
interface ElementProps {
    element: Edge;
}
export interface WithRemoveConnectorProps {
    onShowRemoveConnector?: () => void;
    onHideRemoveConnector?: () => void;
}
declare type RemoveRenderer = (edge: Edge, onRemove: (e: Edge) => void, size?: number) => React.ReactElement;
export declare const withRemoveConnector: <P extends WithRemoveConnectorProps & ElementProps>(onRemove: (edge: Edge) => void, renderRemove?: RemoveRenderer) => (WrappedComponent: React.ComponentType<P>) => React.FunctionComponent<Omit<P, keyof WithRemoveConnectorProps>>;
export {};
//# sourceMappingURL=withRemoveConnector.d.ts.map