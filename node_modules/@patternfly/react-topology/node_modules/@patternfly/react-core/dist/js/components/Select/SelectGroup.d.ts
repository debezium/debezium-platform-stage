import React from 'react';
import { MenuGroupProps } from '../Menu';
/**
 * See the MenuGroup section of the Menu documentation for additional props that may be passed.
 */
export interface SelectGroupProps extends Omit<MenuGroupProps, 'ref'> {
    /** Anything which can be rendered in a select group */
    children: React.ReactNode;
    /** Classes applied to root element of select group */
    className?: string;
    /** Label of the select group */
    label?: string;
}
export declare const SelectGroup: React.FunctionComponent<SelectGroupProps>;
//# sourceMappingURL=SelectGroup.d.ts.map