import * as React from 'react';
import { TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
export declare enum RowSelectVariant {
    radio = "radio",
    checkbox = "checkbox"
}
export interface SelectColumnProps {
    name?: string;
    children?: React.ReactNode;
    className?: string;
    onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
    selectVariant?: RowSelectVariant;
    /** text to display on the tooltip */
    tooltip?: React.ReactNode;
    /** other props to pass to the tooltip */
    tooltipProps?: Omit<TooltipProps, 'content'>;
}
export declare const SelectColumn: React.FunctionComponent<SelectColumnProps>;
//# sourceMappingURL=SelectColumn.d.ts.map