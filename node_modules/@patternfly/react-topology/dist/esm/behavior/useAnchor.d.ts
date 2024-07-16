import * as React from 'react';
import { Anchor, Node, AnchorEnd } from '../types';
declare type AnchorConstructor = new (element?: Node) => Anchor;
export declare const useAnchor: (anchorCallback: AnchorConstructor | ((element: Node) => Anchor | undefined), end?: AnchorEnd, type?: string) => void;
export declare const withAnchor: <P extends {} = {}>(anchor: Anchor, end?: AnchorEnd, type?: string) => (WrappedComponent: React.ComponentType<P>) => React.FunctionComponent<P>;
export {};
//# sourceMappingURL=useAnchor.d.ts.map