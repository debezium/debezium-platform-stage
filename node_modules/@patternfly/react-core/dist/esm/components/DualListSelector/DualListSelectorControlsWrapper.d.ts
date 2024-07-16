import * as React from 'react';
/** Acts as the container for the DualListSelectorControl sub-components. */
export interface DualListSelectorControlsWrapperProps extends React.HTMLProps<HTMLDivElement> {
    /** Content to be rendered inside of the controls wrapper. */
    children?: React.ReactNode;
    /** Additional classes added to the wrapper. */
    className?: string;
    /** @hide Forwarded ref */
    innerRef?: React.RefObject<HTMLDivElement>;
    /** Accessible label for the dual list selector controls wrapper. */
    'aria-label'?: string;
}
export declare const DualListSelectorControlsWrapperBase: React.FunctionComponent<DualListSelectorControlsWrapperProps>;
export declare const DualListSelectorControlsWrapper: React.ForwardRefExoticComponent<Omit<DualListSelectorControlsWrapperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DualListSelectorControlsWrapper.d.ts.map