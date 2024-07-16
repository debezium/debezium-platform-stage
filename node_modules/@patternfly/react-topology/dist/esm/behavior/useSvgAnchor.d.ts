import * as React from 'react';
import { AnchorEnd } from '../types';
export declare type SvgAnchorRef = (node: SVGElement | null) => void;
export declare const useSvgAnchor: (end?: AnchorEnd, type?: string) => (node: SVGElement | null) => void;
export interface WithSvgAnchorProps {
    svgAnchorRef: SvgAnchorRef;
}
export declare const withSvgAnchor: (end?: AnchorEnd, type?: string) => <P extends WithSvgAnchorProps>() => (WrappedComponent: React.ComponentType<P>) => React.FunctionComponent<Omit<P, "svgAnchorRef">>;
//# sourceMappingURL=useSvgAnchor.d.ts.map