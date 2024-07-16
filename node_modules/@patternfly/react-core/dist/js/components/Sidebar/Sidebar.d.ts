import * as React from 'react';
export declare enum SidebarBackgroundVariant {
    default = "default",
    secondary = "secondary"
}
export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    /** Indicates the direction of the layout. Default orientation is stack on small screens, and split on medium screens and above. */
    orientation?: 'stack' | 'split';
    /** Indicates that the panel is displayed to the right of the content when the oritentation is split. */
    isPanelRight?: boolean;
    /** Adds space between the panel and content. */
    hasGutter?: boolean;
    /** Removes the background color. */
    hasNoBackground?: boolean;
    /** Adds a border between the panel and content. */
    hasBorder?: boolean;
}
export declare const Sidebar: React.FunctionComponent<SidebarProps>;
//# sourceMappingURL=Sidebar.d.ts.map