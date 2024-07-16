import * as React from 'react';
export interface TopologySideBarProps {
    /** Additional classes added to the sidebar */
    className?: string;
    /** Contents for the sidebar */
    children?: React.ReactNode;
    /** Flag if sidebar is being used in a resizable drawer (default false) */
    resizable?: boolean;
    /** Not used for resizeable side bars */
    show?: boolean;
    /** A callback for closing the sidebar, if provided the close button will be displayed in the sidebar */
    onClose?: () => void;
    /** Component to place in the header of the sidebar */
    header?: React.ReactNode;
}
export declare const TopologySideBar: React.FunctionComponent<TopologySideBarProps>;
//# sourceMappingURL=TopologySideBar.d.ts.map