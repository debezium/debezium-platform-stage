import * as React from 'react';
import { TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
export declare enum TableTextVariant {
    div = "div",
    nav = "nav"
}
export declare enum WrapModifier {
    wrap = "wrap",
    nowrap = "nowrap",
    truncate = "truncate",
    breakWord = "breakWord",
    fitContent = "fitContent"
}
export interface TableTextProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered within the table text */
    children?: React.ReactNode;
    /** Additional classes added to the table text */
    className?: string;
    /** Determines which element to render as a table text */
    variant?: TableTextVariant | 'span' | 'div';
    /** Determines which wrapping modifier to apply to the table text */
    wrapModifier?: WrapModifier | 'wrap' | 'nowrap' | 'truncate' | 'breakWord' | 'fitContent';
    /** text to display on the tooltip */
    tooltip?: React.ReactNode;
    /** other props to pass to the tooltip */
    tooltipProps?: Omit<TooltipProps, 'content'>;
    /** callback used to create the tooltip if text is truncated */
    onMouseEnter?: (event: any) => void;
    /** Determines if the TableText is focused by parent component */
    focused?: boolean;
    /** Determines if tooltip should have normal visbility behavior. If false, the tooltip will only be shown when children is not entirely visible */
    tooltipHasDefaultBehavior?: boolean;
}
export declare const TableText: React.FunctionComponent<TableTextProps>;
//# sourceMappingURL=TableText.d.ts.map