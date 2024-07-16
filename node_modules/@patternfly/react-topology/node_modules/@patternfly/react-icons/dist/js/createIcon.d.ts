import * as React from 'react';
export interface IconDefinition {
    name?: string;
    width: number;
    height: number;
    svgPath: string;
    xOffset?: number;
    yOffset?: number;
}
export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'ref'> {
    title?: string;
    className?: string;
}
/**
 * Factory to create Icon class components for consumers
 */
export declare function createIcon({ name, xOffset, yOffset, width, height, svgPath }: IconDefinition): React.ComponentClass<SVGIconProps>;
//# sourceMappingURL=createIcon.d.ts.map