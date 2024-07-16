import * as React from 'react';
export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the panel */
    children?: React.ReactNode;
    /** Class to add to outer div */
    className?: string;
    /** Adds panel variant styles */
    variant?: 'raised' | 'bordered' | 'secondary';
    /** Flag to add scrollable styling to the panel */
    isScrollable?: boolean;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export declare const Panel: React.ForwardRefExoticComponent<Omit<PanelProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=Panel.d.ts.map