import * as React from 'react';
import { DrawerColorVariant } from './Drawer';
export interface DrawerPanelFocusTrapObject {
    /** Enables a focus trap on the drawer panel content. This will also automatically
     * handle focus management when the panel expands and when it collapses. Do not pass
     * this prop if the isStatic prop on the drawer component is true.
     */
    enabled?: boolean;
    /** The element to focus when the drawer panel content expands. By default the
     * first focusable element will receive focus. If there are no focusable elements, the
     * panel itself will receive focus.
     */
    elementToFocusOnExpand?: HTMLElement | SVGElement | string;
    /** One or more id's to use for the drawer panel content's accessible label. */
    'aria-labelledby'?: string;
}
export interface DrawerPanelContentProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onResize'> {
    /** Additional classes added to the drawer. */
    className?: string;
    /** ID of the drawer panel */
    id?: string;
    /** Content to be rendered in the drawer panel. */
    children?: React.ReactNode;
    /** Flag indicating that the drawer panel should not have a border. */
    hasNoBorder?: boolean;
    /** Flag indicating that the drawer panel should be resizable. */
    isResizable?: boolean;
    /** Callback for resize end. */
    onResize?: (event: MouseEvent | TouchEvent | React.KeyboardEvent, width: number, id: string) => void;
    /** The minimum size of a drawer. */
    minSize?: string;
    /** The starting size of a drawer. */
    defaultSize?: string;
    /** The maximum size of a drawer. */
    maxSize?: string;
    /** The increment amount for keyboard drawer resizing. */
    increment?: number;
    /** Aria label for the resizable drawer splitter. */
    resizeAriaLabel?: string;
    /** Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize. */
    widths?: {
        default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
        lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
        xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
        '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    };
    /** Color variant of the background of the drawer panel */
    colorVariant?: DrawerColorVariant | 'no-background' | 'default' | 'secondary';
    /** Adds and customizes a focus trap on the drawer panel content. */
    focusTrap?: DrawerPanelFocusTrapObject;
}
export declare const DrawerPanelContent: React.FunctionComponent<DrawerPanelContentProps>;
//# sourceMappingURL=DrawerPanelContent.d.ts.map