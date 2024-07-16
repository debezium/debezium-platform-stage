import React from 'react';
import { MenuGroupProps } from '../Menu';
/**
 * See the MenuGroup section of the Menu documentation for additional props that may be passed.
 */
export interface DropdownGroupProps extends Omit<MenuGroupProps, 'ref'> {
    /** Anything which can be rendered in a dropdown group. */
    children: React.ReactNode;
    /** Classes applied to root element of dropdown group */
    className?: string;
    /** Label of the dropdown group */
    label?: string;
}
export declare const DropdownGroup: React.FunctionComponent<DropdownGroupProps>;
//# sourceMappingURL=DropdownGroup.d.ts.map