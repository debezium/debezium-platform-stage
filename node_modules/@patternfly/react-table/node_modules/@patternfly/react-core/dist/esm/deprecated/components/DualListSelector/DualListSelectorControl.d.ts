import * as React from 'react';
/** Renders an individual control button for moving selected options between each
 * dual list selector pane.
 */
export interface DualListSelectorControlProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
    /** Content to be rendered in the dual list selector control. */
    children?: React.ReactNode;
    /** @hide forwarded ref */
    innerRef?: React.Ref<any>;
    /** Flag indicating the control is disabled. */
    isDisabled?: boolean;
    /** Additional classes applied to the dual list selector control. */
    className?: string;
    /** Callback fired when dual list selector control is selected. */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Accessible label for the dual list selector control. */
    'aria-label'?: string;
    /** Content to be displayed in a tooltip on hover of control. */
    tooltipContent?: React.ReactNode;
    /** Additional tooltip properties passed to the tooltip. */
    tooltipProps?: any;
}
export declare const DualListSelectorControlBase: React.FunctionComponent<DualListSelectorControlProps>;
export declare const DualListSelectorControl: React.ForwardRefExoticComponent<Omit<DualListSelectorControlProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=DualListSelectorControl.d.ts.map