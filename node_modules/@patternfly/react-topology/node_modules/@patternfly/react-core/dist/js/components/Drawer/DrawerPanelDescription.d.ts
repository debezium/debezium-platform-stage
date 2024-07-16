import * as React from 'react';
/** Provides a description within the drawer panel. This should typically follow the drawer head. */
export interface DrawerPanelDescriptionProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the drawer description. */
    className?: string;
    /** Content to be rendered in the drawer description */
    children: React.ReactNode;
}
export declare const DrawerPanelDescription: React.FunctionComponent<DrawerPanelDescriptionProps>;
//# sourceMappingURL=DrawerPanelDescription.d.ts.map