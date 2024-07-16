import * as React from 'react';
import { SVGDefsContextProps } from './SVGDefsContext';
interface SVGDefsProps {
    id: string;
    children: React.ReactNode;
}
export declare type SVGDefsSetterProps = SVGDefsContextProps & SVGDefsProps;
/**
 * Contributes `children` to the parent SVG `<defs>` element.
 * A contribution is assumed to be static in nature in that the children will never change
 * for a given ID. This is because there may be multiple children referencing the same defs contribution.
 * The assumption must be that there is not a single owner but many owners and therefore each
 * owner must be contributing the same def.
 */
export default class SVGDefs extends React.Component<SVGDefsProps> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=SVGDefs.d.ts.map