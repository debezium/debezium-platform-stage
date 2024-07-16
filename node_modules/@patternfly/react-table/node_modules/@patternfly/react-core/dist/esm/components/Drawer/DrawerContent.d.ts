import * as React from 'react';
export declare enum DrawerContentColorVariant {
    default = "default",
    primary = "primary",
    secondary = "secondary"
}
export interface DrawerContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the Drawer. */
    className?: string;
    /** Content to be rendered in the drawer. */
    children?: React.ReactNode;
    /** Content rendered in the drawer panel. */
    panelContent: React.ReactNode;
    /** Color variant of the background of the drawer panel */
    colorVariant?: DrawerContentColorVariant | 'default' | 'primary' | 'secondary';
}
export declare const DrawerContent: React.FunctionComponent<DrawerContentProps>;
//# sourceMappingURL=DrawerContent.d.ts.map