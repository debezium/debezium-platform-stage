import * as React from 'react';
interface BackToTopProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
    /** Additional classes added to the back to top. */
    className?: string;
    /** Title to appear in back to top button. */
    title?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Selector for the scrollable element to spy on. Not passing a selector defaults to spying on window scroll events. */
    scrollableSelector?: string;
    /** Flag to always show back to top button, defaults to false. */
    isAlwaysVisible?: boolean;
}
export declare const BackToTop: React.ForwardRefExoticComponent<Omit<BackToTopProps, "ref"> & React.RefAttributes<any>>;
export {};
//# sourceMappingURL=BackToTop.d.ts.map