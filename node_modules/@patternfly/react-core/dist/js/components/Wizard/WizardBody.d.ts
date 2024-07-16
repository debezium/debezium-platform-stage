import React from 'react';
/**
 * Used as a wrapper for WizardStep content, where the wrapping element is customizable.
 */
export interface WizardBodyProps extends React.HTMLProps<HTMLElement> {
    /** Anything that can be rendered in the Wizard body */
    children: React.ReactNode;
    /** Additional classes spread to the wizard body */
    className?: string;
    /** Flag to remove the default body padding */
    hasNoPadding?: boolean;
    /** Adds an accessible name to the wrapper element when the content overflows and renders
     * a scrollbar.
     */
    'aria-label'?: string;
    /** Adds an accessible name to the wrapper element by passing the the id of one or more elements.
     * The aria-labelledby will only be applied when the content overflows and renders a scrollbar.
     */
    'aria-labelledby'?: string;
    /** Component used as the wrapping content container */
    component?: React.ElementType;
}
export declare const WizardBody: {
    ({ children, className, hasNoPadding, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, component, ...props }: WizardBodyProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardBody.d.ts.map